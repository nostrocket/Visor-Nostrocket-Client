<template>
    <div class="dark:text-white max-w-4xl mx-auto">
      
<h1 class="text-4xl text-left mt-6">Hex 2 Bech Converter</h1>
<p class="text-left">{{ t("message") }}</p>
  <div>
    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <KeyIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input v-model="inputkey" type="text" class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 mb-6 max-w-4xl dark:text-black" placeholder="hex input" />
    </div>
  </div>


       <h1 class="text-2xl text-left mt-6"> Bech32 key</h1>
      

      
      <BlockProseCopybox :copycontent="hex" />




    </div>
</template>

<script setup>
import {KeyIcon, ShareIcon, GlobeEuropeAfricaIcon} from "@heroicons/vue/24/outline";
import {toBech32, fromHex} from '@cosmjs/encoding'
import { ref, watch } from "vue";

const inputkey = ref();
const hex = ref(' Nsec Key Output but could also be a Npub ?');

watch(inputkey, (newValue, oldValue) => {
hex.value = toBech32("nsec", fromHex(inputkey.value))
});

const { t } = useI18n({ useScope: "local" });

</script>

<i18n lang="json">
{
  "da": {
    "message": "Konverter gammel-stil hex nøgle til Npub eller Nsec, jeg har ingen anelse om hvordan man fortæller det :-D"
  },
  "de": {
    "message": "Konvertiere alten hexadezimalen Schlüssel in Npub oder Nsec, keine Ahnung, wie man es sagt :-D"
  },
  "en": {
    "message": "Convert old-style hex key to Npub or Nsec, I have no clue how to tell :-D"
  },
  "es": {
    "message": "Convierte una clave hexadecimal en el antiguo estilo a Npub o Nsec, no tengo ni idea de cómo explicarlo :-D"
  },
  "fr": {
    "message": "Convertir une clé hexadécimale ancienne en Npub ou Nsec, je n'ai aucune idée de comment le dire :-D"
  },
  "nl": {
    "message": "Converteer een ouderwetse hexadecimale sleutel naar Npub of Nsec, ik heb geen idee hoe ik het moet vertellen :-D"
  }
}
</i18n>