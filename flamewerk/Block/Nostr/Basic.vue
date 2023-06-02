<template>
    <div>
    </div>
</template>

<script setup>

// Connect to the relay

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

// Load Current Keys from store

import { useNostr } from "~/flamewerk/nostr";

const nostrkeys = useNostr();

const sk = ref();
const pk = ref();
const nsec = ref();
const npub = ref();


</script>