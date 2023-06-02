<template>
    <div class="dark:text-white max-w-4xl mx-auto">
      
<h1 class="text-4xl text-left mt-6">Submit Login</h1>
<p class="text-left">Input Npub or Nsec</p>
  <div>
    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <KeyIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input v-model="inputkey" type="text" class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 mb-6 max-w-4xl dark:text-black" placeholder="Npub... OR Nsec..." />
    </div>

<p class="text-left mb-6">Only the secret key can be used to publish (sign events), everything else logs you in read-only mode.</p>




      <button @click="onSubmit" type="button" class="max-w-sm mx-auto flex w-full items-center justify-center rounded-md border border-transparent px-4 py-2 my-6 text-base font-medium text-white shadow-sm bg-colorBtnLight dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark hover:bg-colorBtnHoverLight">
      <ArrowRightOnRectangleIcon class="h-6 w-6 shrink-0 mr-2" />
       Login</button>

  </div>


     

      
      <!-- <p class="text-left">Simple Check: {{message}}</p>  -->




    </div>
</template>

<script setup>
import {KeyIcon, ArrowRightOnRectangleIcon} from "@heroicons/vue/24/outline";

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

import { useNostr } from "~/flamewerk/nostr";

const nostrkeys = useNostr();



const onSubmit = () => {

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
// SETTING KEYS IN Nostr.JS 
nostrkeys.nostr.sk = nsec.value
nostrkeys.nostr.pk = npub.value
nostrkeys.nostr.skhex = sk.value
nostrkeys.nostr.pkhex = pk.value

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
// SETTING KEYS IN Nostr.JS 
nostrkeys.nostr.sk = nsec.value
nostrkeys.nostr.pk = npub.value
nostrkeys.nostr.skhex = sk.value
nostrkeys.nostr.pkhex = pk.value





}


};



</script>


