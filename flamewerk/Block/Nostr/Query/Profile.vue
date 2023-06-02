<template>
    <div>
        {{Message}}
    </div>
</template>

<script setup>

import { useSettings } from "~/flamewerk/project";
const project = useSettings();

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

let pk = 'c8383d81dd24406745b68409be40d6721c301029464067fcc50a25ddf9139549'

let sub = relay.sub([
  {
    kinds: [0],
    authors: [pk]
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


</script>