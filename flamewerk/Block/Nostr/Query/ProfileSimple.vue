<template>

        

  <div class="bg-white shadow sm:rounded-lg max-w-4xl mx-auto  dark:bg-gray-800 my-2">


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
    Website.value = ""
  About.value = ""
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