<template>
  <div class="border-b border-gray-200 dark:border-gray-700 bg-white px-4 py-2 sm:px-6 rounded-xl dark:bg-gray-800">

    <h3 class="text-lg">CURRENT KEYS IN MEMORY</h3>

      <h1 class="text-2xl text-left mt-6"><KeyIcon class="h-6 w-6 mr-2 inline" /> Privatekey</h1>
      <BlockProseCopybox :copycontent="nostrkeys.nostr.sk" />


       <h1 class="text-2xl text-left mt-6"><GlobeEuropeAfricaIcon class="h-6 w-6 mr-2 inline" /> Publickey</h1>
      <BlockProseCopybox :copycontent="nostrkeys.nostr.pk" />


      <h1 class="text-2xl text-left mt-6"><KeyIcon class="h-6 w-6 mr-2 inline" />Hex Privatekey</h1>
      <BlockProseCopybox :copycontent="nostrkeys.nostr.skhex" />


       <h1 class="text-2xl text-left mt-6"><GlobeEuropeAfricaIcon class="h-6 w-6 mr-2 inline" />Hex Publickey</h1>
      <BlockProseCopybox :copycontent="nostrkeys.nostr.pkhex" />


  </div>
</template>

<script setup>
import { useNostr } from "~/flamewerk/nostr";

const nostrkeys = useNostr();

</script>