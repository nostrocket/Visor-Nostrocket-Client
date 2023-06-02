<template>
    <div>
    </div>
</template>

<script setup>

import { useSettings } from "~/flamewerk/project";
const project = useSettings();

import {
  relayInit
} from 'nostr-tools'

const relay = relayInit(project.nostrrelay)
relay.on('connect', () => {
  console.log(`connected to ${relay.url}`)
})
relay.on('error', () => {
  console.log(`failed to connect to ${relay.url}`)
})

await relay.connect()




</script>