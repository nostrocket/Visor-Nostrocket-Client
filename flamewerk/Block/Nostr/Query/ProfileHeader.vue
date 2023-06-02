<template>
    <div>
            <!-- Profile dropdown -->
            <Menu as="div" class="relative" v-if="project.$state.nostrprofile">
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 max-w-8 rounded-full bg-gray-50"
                  :src="Picture"
                  alt=""
                />
                <span class="hidden lg:flex lg:items-center">
                  <span
                    class="ml-4 text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    >{{Displayname}}</span
                  >
                  <ChevronDownIcon
                    class="ml-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </MenuButton>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                >


                  <MenuItem
                 >
                    <BlockNostrQueryProfilePopup />
                  </MenuItem>


                  <MenuItem
                 >
                    <BlockNostrLogoutMenu />
                  </MenuItem>



                </MenuItems>
              </transition>
            </Menu>


    </div>
</template>

<script setup>

import { useSettings } from "~/flamewerk/project";
import { useNostr } from "~/flamewerk/nostr";

const nostrkeys = useNostr();
const project = useSettings();

import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";


import {
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
  
} from "@heroicons/vue/20/solid";

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
    authors: [nostrkeys.nostr.pkhex]
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

watch(nostrkeys, (newValue, oldValue) => {
// console.log('Watchaa')

if (nostrkeys.nostr.pkhex == ""){
  // console.log(oldValue)
  // console.log(newValue)
  Name.value = ""
  Displayname.value = ""
  Picture.value = "/icon.png"
  


  // console.log('Logedout')
}


let pk = nostrkeys.nostr.pkhex

let sub = relay.sub([
  {
    kinds: [0],
    authors: [nostrkeys.nostr.pkhex]
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


});




</script>

