<template>
    <div class="dark:text-white max-w-4xl mx-auto">
      
<h1 class="text-4xl text-left mt-6">Key Converter</h1>
<p class="text-left">{{ t("message") }}</p>
  <div>
    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <KeyIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input v-model="inputkey" type="text" class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 mb-6 max-w-4xl dark:text-black" placeholder="npub... OR nsec..." />
    </div>
  </div>


       <h1 class="text-2xl text-left mt-6"> Hex key</h1>
      

      
      <BlockProseCopybox :copycontent="hex" />




    </div>
</template>

<script setup>
import {KeyIcon, ShareIcon, GlobeEuropeAfricaIcon} from "@heroicons/vue/24/outline";
import {toHex, fromBech32} from '@cosmjs/encoding'
import { ref, watch } from "vue";

const inputkey = ref();
const hex = ref(' Hex Key Output');

watch(inputkey, (newValue, oldValue) => {
hex.value = toHex(fromBech32(inputkey.value).data)
});

const { t } = useI18n({ useScope: "local" });

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