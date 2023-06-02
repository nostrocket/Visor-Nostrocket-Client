<template>
    <div class="text-white max-w-4xl mx-auto">

<h1 class="text-4xl text-left mt-6">Save your keys!</h1>

<p class="text-left">Your private key is your password. If you lose this key, you will lose access to your account! Copy it and keep it in a safe place. There is no way to reset your private key.</p>

      <h1 class="text-2xl text-left mt-6"><KeyIcon class="h-6 w-6 mr-2 inline" /> Privatekey</h1>
      <BlockProseCopybox :copycontent="nsec" />


       <h1 class="text-2xl text-left mt-6"><GlobeEuropeAfricaIcon class="h-6 w-6 mr-2 inline" /> Publickey</h1>
      <BlockProseCopybox :copycontent="npub" />

<p class="my-4 mt-6">
      <!-- <a class="max-w-sm mx-2 my-6 text-left rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm bg-colorBtnLight dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark hover:bg-colorBtnHoverLight inline"> Keys are saved! Let me in !</a> -->


      <a @click="newpair" class="max-w-sm mx-2 my-6 rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm bg-colorBtnLight dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark hover:bg-colorBtnHoverLight inline"><ArrowPathIcon class="h-6 w-6 inline" /> Generate New Pair</a>

</p>






    </div>
</template>

<script setup>
import {generatePrivateKey, getPublicKey} from 'nostr-tools'
import {IdentificationIcon} from "@heroicons/vue/20/solid";
import {KeyIcon, ShareIcon, GlobeEuropeAfricaIcon, ArrowPathIcon} from "@heroicons/vue/24/outline";
import {toBech32, fromHex} from '@cosmjs/encoding'

const sk = ref();
const pk = ref();
const nsec = ref();
const npub = ref();

  sk.value = generatePrivateKey() // `sk` is a hex string
  pk.value = getPublicKey(sk.value) // `pk` is a hex string
  nsec.value = toBech32("nsec", fromHex(sk.value))
  npub.value = toBech32("npub", fromHex(pk.value))

function newpair() {
  sk.value = generatePrivateKey() // `sk` is a hex string
  pk.value = getPublicKey(sk.value) // `pk` is a hex string
  nsec.value = toBech32("nsec", fromHex(sk.value))
  npub.value = toBech32("npub", fromHex(pk.value))
}


const { t } = useI18n({ useScope: "local" });

</script>


<i18n lang="json">
{  
"da": {
"title": "Din offentlige nøgle (pubkey) og hemmelige nøgle (secretkey) er nøglerne til dit Nostr-rige. De giver dig adgang til din konto, beskytter dine beskeder og filer og sikrer dit privatliv.",
"message": "⚠️ Hvis du mister dine private nøgler, mister du adgangen til din konto og alle data, der er forbundet med den. ⚠️",
"button": "Generer nye nøgler"
},
"de": {
"title": "Dein öffentlicher Schlüssel (pubkey) und geheimer Schlüssel (secretkey) sind die Schlüssel zu deinem Nostr-Königreich. Sie gewähren dir Zugang zu deinem Konto, schützen deine Nachrichten und Dateien und stellen deine Privatsphäre sicher.",
"message": "⚠️ Wenn du deine privaten Schlüssel verlierst, verlierst du den Zugang zu deinem Konto und allen damit verbundenen Daten. ⚠️",
"button": "Neue Schlüssel generieren"
},
  "en": {
    "title": "Your pubkey and secretkey are the keys to your Nostr kingdom. They grant you access to your account, protect your messages and files, and ensure your privacy.  ",
     "message": "⚠️ Losing your private keys means losing access to your account and all the data associated with it. ⚠️ ",
     "button":"Generate new keys",
    },
"es": {
"title": "Tu clave pública (pubkey) y clave secreta (secretkey) son las llaves de tu reino Nostr. Te otorgan acceso a tu cuenta, protegen tus mensajes y archivos, y garantizan tu privacidad.",
"message": "⚠️ Perder tus claves privadas significa perder acceso a tu cuenta y todos los datos asociados a ella. ⚠️",
"button": "Generar nuevas llaves"
},
"fr": {
"title": "Votre clé publique (pubkey) et clé secrète (secretkey) sont les clés de votre royaume Nostr. Elles vous donnent accès à votre compte, protègent vos messages et fichiers, et garantissent votre vie privée.",
"message": "⚠️ Perdre vos clés privées signifie perdre l'accès à votre compte et à toutes les données qui y sont associées. ⚠️",
"button": "Générer de nouvelles clés"
},
"nl": {
"title": "Je publieke sleutel (pubkey) en geheime sleutel (secretkey) zijn de sleutels tot jouw Nostr-koninkrijk. Ze geven je toegang tot je account, beschermen je berichten en bestanden en waarborgen je privacy.",
"message": "⚠️ Het verliezen van je privésleutels betekent het verliezen van toegang tot je account en alle gegevens die ermee verbonden zijn. ⚠️",
"button": "Nieuwe sleutels genereren"
}
}
</i18n>