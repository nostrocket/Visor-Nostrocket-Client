<template>
  <div class="">

    <button
      type="button"
      @click="openModal"
      class="block px-3 py-1 text-sm leading-6 text-gray-900"
    ><UserIcon class="h-6 w-6 shrink-0 inline" />
Profile
    </button>




  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-50" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900/80 backdrop-blur-sm bg-opacity-[50%] text-left align-middle shadow-xl transition-all"
            >


              <div class="text-white text-center h-full">


                <img
                  class="h-36 w-36 max-w-8 rounded-full bg-gray-50 mx-auto block my-6"
                  :src="Picture"
                  alt=""
                />


              <div class=" h-full text-center">




                  <h3 v-if="Displayname"
                    class=" text-lg font-semibold leading-6 text-gray-900 dark:text-white my-6"
                    aria-hidden="true"
                    >Display Name: {{Displayname}}</h3
                  >

                  <h3 v-if="Name"
                    class=" text-lg font-semibold leading-6 text-gray-900 dark:text-white my-6"
                    aria-hidden="true"
                    >Username: {{Name}}</h3
                  >

                  <a :href='Website' target="_blank" v-if="Website"
                    class=" text-lg font-semibold leading-6 text-gray-900 dark:text-white my-6"
                    aria-hidden="true"
                    >Website: {{Website}}</a
                  >

              </div>

                  <h3 v-if="About"
                    class=" text-lg font-semibold leading-6 text-gray-900 dark:text-white my-6 px-12"
                    aria-hidden="true"
                    >About: {{About}}</h3
                  >

              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";

import { useSettings } from "~/flamewerk/project";
import { useNostr } from "~/flamewerk/nostr";

const nostrkeys = useNostr();
const project = useSettings();

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/20/solid";
import {  KeyIcon, UserIcon
} from "@heroicons/vue/24/outline";

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

import {
  relayInit,
    generatePrivateKey,
  getPublicKey,
  getEventHash
} from 'nostr-tools'

const relay = relayInit(project.nostrrelay)
relay.on('connect', () => {
  console.log(`connected to ${relay.url}`)
})
relay.on('error', () => {
  console.log(`failed to connect to ${relay.url}`)
})

await relay.connect()

const Displayname = ref("");
const Name = ref("");
const Picture = ref("/icon.png");
const Website = ref("");
const About = ref("");


let pk = nostrkeys.nostr.pkhex

let sub = relay.sub([
  {
    kinds: [0],
    authors: [pk]
  }
])

sub.on('event', event => {
  // console.log('got event:', event)
  // console.log(event.content)

  const obj = JSON.parse(event.content);

  console.log(obj.name)
  Name.value = obj.name

  console.log(obj.display_name)
  Displayname.value = obj.display_name

  console.log(obj.picture)
  Picture.value = obj.picture
  
  console.log(obj.website)
  Website.value = obj.website

  console.log(obj.about)
  About.value = obj.about


})


</script>


