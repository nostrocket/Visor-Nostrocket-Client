<template>
    <div class="dark:text-white mt-12 max-w-4xl mx-auto">

      <h1 class="text-4xl text-left">Create 1 Key, 2 Pairs, 2 Formats </h1>

      <p class="text-left">{{ t("title") }} </p>


      <button @click="newpair" class="max-w-sm flex w-full items-center justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm bg-colorBtnLight dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark hover:bg-colorBtnHoverLight"> {{ t("button") }}</button>

      <h1 class="text-3xl text-left mt-16">Bech32 Format</h1>

      <h1 class="text-2xl text-left"><KeyIcon class="h-6 w-6 mr-2 inline " /> Privatekey</h1>
      <BlockProseCopybox :copycontent="nsec" />


       <h1 class="text-2xl text-left"><KeyIcon class="h-6 w-6 mr-2 inline " /> Publickey</h1>
      <BlockProseCopybox :copycontent="npub" />

      <h1 class="text-3xl text-left mt-16">HEX Format</h1>

      <p>{{ t("hexmessage") }}</p>

      <h1 class="text-2xl text-left"><KeyIcon class="h-6 w-6 mr-2 inline " /> Privatekey</h1>
      <BlockProseCopybox :copycontent="sk" />


       <h1 class="text-2xl text-left"><KeyIcon class="h-6 w-6 mr-2 inline " /> Publickey</h1>
      <BlockProseCopybox :copycontent="pk" />

      <p class="font-bold mt-6">{{ t("message") }}</p>


    </div>
</template>

<script setup>
import {generatePrivateKey, getPublicKey} from 'nostr-tools'
import {IdentificationIcon} from "@heroicons/vue/20/solid";
import {KeyIcon} from "@heroicons/vue/24/outline";
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
"hexmessage": "Disse er nsec- og npub-nøglerne i HEX-format, de repræsenterer simpelthen den samme information i en anden form. Dette kan være nyttigt for visse applikationer eller når man arbejder med systemer, der forventer, at nøgler repræsenteres i HEX.",
"button": "Generer 4 nye nøgler"
},
"de": {
"title": "Dein öffentlicher Schlüssel (pubkey) und geheimer Schlüssel (secretkey) sind die Schlüssel zu deinem Nostr-Königreich. Sie gewähren dir Zugang zu deinem Konto, schützen deine Nachrichten und Dateien und stellen deine Privatsphäre sicher.",
"message": "⚠️ Wenn du deine privaten Schlüssel verlierst, verlierst du den Zugang zu deinem Konto und allen damit verbundenen Daten. ⚠️",
"hexmessage": "Dies sind die nsec- und npub-Schlüssel im HEX-Format, sie stellen einfach dieselben Informationen in einer anderen Form dar. Dies kann für bestimmte Anwendungen oder beim Arbeiten mit Systemen, die Schlüssel im HEX-Format erwarten, nützlich sein.",
"button": "Neue 4 Schlüssel generieren"
},
  "en": {
    "title": "Your pubkey and secretkey are the keys to your Nostr kingdom. They grant you access to your account, protect your messages and files, and ensure your privacy.  ",
     "message": "⚠️ Losing your private keys means losing access to your account and all the data associated with it. ⚠️ ",
     "hexmessage": "These are the nsec and npub keys into HEX format, they simply representing the same information in a different form. This can be useful for certain applications or when working with systems that expect keys to be represented in HEX.",
     "button":"Generate 4 new keys",
    },
"es": {
"title": "Tu clave pública (pubkey) y clave secreta (secretkey) son las llaves de tu reino Nostr. Te otorgan acceso a tu cuenta, protegen tus mensajes y archivos, y garantizan tu privacidad.",
"message": "⚠️ Perder tus claves privadas significa perder acceso a tu cuenta y todos los datos asociados a ella. ⚠️",
"hexmessage": "Estas son las claves nsec y npub en formato HEX, simplemente representan la misma información de una forma diferente. Esto puede ser útil para ciertas aplicaciones o al trabajar con sistemas que esperan que las claves se representen en formato HEX.",
"button": "Generar 4 nuevas llaves"
},
"fr": {
"title": "Votre clé publique (pubkey) et clé secrète (secretkey) sont les clés de votre royaume Nostr. Elles vous donnent accès à votre compte, protègent vos messages et fichiers, et garantissent votre vie privée.",
"message": "⚠️ Perdre vos clés privées signifie perdre l'accès à votre compte et à toutes les données qui y sont associées. ⚠️",
"hexmessage": "Voici les clés nsec et npub au format HEX, elles représentent simplement les mêmes informations sous une forme différente. Cela peut être utile pour certaines applications ou lorsqu'on travaille avec des systèmes qui attendent que les clés soient représentées en format HEX.",
"button": "Générer 4 de nouvelles clés"
},
"nl": {
"title": "Je publieke sleutel (pubkey) en geheime sleutel (secretkey) zijn de sleutels tot jouw Nostr-koninkrijk. Ze geven je toegang tot je account, beschermen je berichten en bestanden en waarborgen je privacy.",
"message": "⚠️ Het verliezen van je privésleutels betekent het verliezen van toegang tot je account en alle gegevens die ermee verbonden zijn. ⚠️",
"hexmessage": "Dit zijn de nsec- en npub-sleutels in HEX-indeling, ze vertegenwoordigen eenvoudigweg dezelfde informatie in een andere vorm. Dit kan handig zijn voor bepaalde toepassingen of bij het werken met systemen die verwachten dat sleutels in HEX worden weergegeven.",
"button": "Nieuwe 4 sleutels genereren"
}
}
</i18n>