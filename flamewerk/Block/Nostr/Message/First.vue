<template>
  <div class="bg-white shadow sm:rounded-lg max-w-4xl mx-auto  dark:bg-gray-800 my-2">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white"><ChatBubbleOvalLeftEllipsisIcon class="h-6 w-6 mr-1 -mt-2 inline" /> Relaying Down to Your First Nostr Event Message</h3>
      <div class="mt-2 max-w-xl text-sm text-gray-500 text-center mx-auto dark:text-gray-100">
        <p class="text-center">
        {{Message.content}}
</p>
      </div>

    </div>
  </div>



</template>

<script setup>

import { useSettings } from "~/flamewerk/project";
const project = useSettings();

import { useNostr } from "~/flamewerk/nostr";

const nostrkeys = useNostr();


import {KeyIcon, ChatBubbleOvalLeftEllipsisIcon} from "@heroicons/vue/24/outline";



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

const Message = ref("");



let sub = relay.sub([
  {
    kinds: [1],
    authors: [nostrkeys.nostr.pkhex]
  }
])

sub.on('event', event => {
  console.log('got event:', event)
  Message.value = event
})

// sub.on('eose', () => {
//   sub.unsub()
// })

// relay.close()


watch(nostrkeys, (newValue, oldValue) => {


let sub = relay.sub([
  {
    kinds: [1],
    authors: [nostrkeys.nostr.pkhex]
  }
])

sub.on('event', event => {
  console.log('got event:', event)
  Message.value = event
})



})


</script>