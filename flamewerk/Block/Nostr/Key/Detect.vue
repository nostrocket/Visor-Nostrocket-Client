<template>
    <div class="dark:text-white max-w-4xl mx-auto">
      
<h1 class="text-4xl text-left mt-6">Sec or Pub Key</h1>
<p class="text-left">Input Npub or Nsec</p>
  <div>
    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <KeyIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input v-model="inputkey" type="text" class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 mb-6 max-w-4xl dark:text-black" placeholder="Npub... OR Nsec..." />
    </div>
  </div>


       <h1 class="text-2xl text-left mt-12">No Validation Output</h1>
      

      
      <p class="text-left">Simple Check: {{message}}</p> 




    </div>
</template>

<script setup>
import {KeyIcon, ShareIcon, GlobeEuropeAfricaIcon} from "@heroicons/vue/24/outline";
import {toHex, fromBech32} from '@cosmjs/encoding'
import { ref, watch } from "vue";

const inputkey = ref();
const keyslice = ref();

const message = ref('');

watch(inputkey, (newValue, oldValue) => {

// console.log(inputkey)
keyslice.value = inputkey.value.toLowerCase().slice(0, 4)
console.log(keyslice.value)

if (keyslice.value == ('nsec')) {
console.log('This is a Secret Key')
message.value = 'This is 🤫 Secret Key 🔑 '
}

if (keyslice.value == ('npub')) {
console.log('This is a Public Key')
message.value = 'This is 🌏 Public Key ⚡️'
}


});



</script>


