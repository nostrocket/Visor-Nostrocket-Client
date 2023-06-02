<template>
    <div class="dark:text-white max-w-4xl mx-auto">
      
<h1 class="text-4xl text-left mt-6">Key Injection</h1>
<p class="text-left">This sets all 4 Key Variants WITHOUT CONVERTING (HEXPUB is required for Profile Loading )!</p>
  <div>
    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <KeyIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>

    
      <input v-model="nsec" type="text" class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 mb-6 max-w-4xl dark:text-black" placeholder="nseckey" />
    
    
    </div>

    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <KeyIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>

    
    
      <input v-model="npub" type="text" class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 mb-6 max-w-4xl dark:text-black" placeholder="npubkey" />
    

    
    </div>

    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <KeyIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>

    
      <input v-model="sk" type="text" class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 mb-6 max-w-4xl dark:text-black" placeholder="Secret hexkey" />
    

    
    </div>


    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <KeyIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>

      <input v-model="pk" type="text" class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 mb-6 max-w-4xl dark:text-black" placeholder="Public hexkey" />

    
    </div>






<button @click="onSubmit" type="button" class="inline-flex justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2">
                  Set new keys in memory
                </button>


  </div>
</div>
</template>

<script setup>
import {KeyIcon, ShareIcon, GlobeEuropeAfricaIcon} from "@heroicons/vue/24/outline";
import {toHex, fromBech32} from '@cosmjs/encoding'
import { ref, watch } from "vue";

const sk = ref();
const pk = ref();
const nsec = ref();
const npub = ref();

const inputkey = ref();
const hex = ref(' Hex Key Output');


import { useNostr } from "~/flamewerk/nostr";

const nostrkeys = useNostr();

const onSubmit = () => {
    nostrkeys.nostr.sk = nsec;
    nostrkeys.nostr.pk = npub;

    nostrkeys.nostr.skhex = sk;
    nostrkeys.nostr.pkhex = pk;




    
}





</script>


<i18n lang="json">
{
"da": {
"message": "Konverter en Npub eller Nsec-nøgle til en gammeldags heksnøgle"
},
"de": {
"message": "Konvertieren Sie einen Npub- oder Nsec-Schlüssel in einen alten hexadezimalen Schlüssel"
},
"en": {
"message": "Convert a Npub or Nsec key to an old-style hex key"
},
"es": {
"message": "Convertir una clave Npub o Nsec a una clave hexadecimal en el antiguo estilo"
},
"fr": {
"message": "Convertir une clé Npub ou Nsec en une clé hexadécimale de style ancien"
},
"nl": {
"message": "Converteer een Npub- of Nsec-sleutel naar een ouderwetse hexadecimale sleutel"
}
}
</i18n>