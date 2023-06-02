<template>
    <div class="dark:text-white max-w-4xl mx-auto">
      
<h1 class="text-4xl text-left mt-6">Auto Converter</h1>
<p class="text-left">Input Npub or Nsec</p>
  <div>
    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <KeyIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input v-model="inputkey" type="text" class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 mb-6 max-w-4xl dark:text-black" placeholder="Npub... OR Nsec..." />
    </div>
  </div>


       <h1 class="text-2xl text-left mt-12">Decent Validation Output</h1>
      

      
      <p class="text-left">Simple Check: {{message}}</p> 

      <p class="text-left">⚠️ LIVE Conversion Check (Does not set keys in Global Storage)</p> 
  <p class="text-left" v-if="nsec">nsec: {{nsec}}</p>
  <p class="text-left" v-if="npub">npub: {{npub}}</p>
  <p class="text-left" v-if="sk">hex sk: {{sk}}</p>
  <p class="text-left" v-if="pk">hex pk: {{pk}}</p>


    </div>
</template>

<script setup>
import {KeyIcon, ShareIcon, GlobeEuropeAfricaIcon} from "@heroicons/vue/24/outline";
import { ref, watch } from "vue";

const inputkey = ref();
const keyslice = ref();

const message = ref('');


import {toBech32, fromHex, toHex, fromBech32} from '@cosmjs/encoding'
import {getPublicKey} from 'nostr-tools'

const sk = ref();
const pk = ref('');
const nsec = ref();
const npub = ref();

  // nsec.value = toBech32("nsec", fromHex(sk.value))
  // npub.value = toBech32("npub", fromHex(pk.value))
  // sk.value = generatePrivateKey() `sk` is a hex string
  // pk.value = getPublicKey(sk.value) `pk` is a hex string


watch(inputkey, (newValue, oldValue) => {

// console.log(inputkey)
keyslice.value = inputkey.value.toLowerCase().slice(0, 4)
// console.log(keyslice.value)

if (keyslice.value == ('nsec')) {
console.log('This is a Secret Key')
message.value = '✅ Secret Key  '
//STRAIGHT KEY INPUT
nsec.value = inputkey.value.toLowerCase()
sk.value = toHex(fromBech32(inputkey.value).data)
pk.value = getPublicKey(sk.value)
npub.value = toBech32("npub", fromHex(pk.value))

}

if (keyslice.value == ('npub')) {
console.log('This is a Public Key')
message.value = '✅ Public Key'
//STRAIGHT KEY INPUT
npub.value = inputkey.value.toLowerCase()
//CONVERTED KEY
sk.value = ''
nsec.value = ''
pk.value = toHex(fromBech32(inputkey.value.toLowerCase()).data)
}


});



</script>


