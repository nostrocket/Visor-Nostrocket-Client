<template>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-50" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-gray-900/80 backdrop-blur-sm bg-opacity-[50%] text-left align-middle shadow-xl transition-all"
            >


              <div class="text-white text-center h-full">

              <div class=" w-full">
                <div class=" p-12">


<h1 class="text-4xl text-left mt-6">Submit Login</h1>
<p class="text-left">Input Npub or Nsec</p>
  <div>
    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <KeyIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input v-model="inputkey" type="text" class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 mb-6 max-w-4xl text-black" placeholder="Npub... OR Nsec..." />
    </div>

<p class="text-left mb-6">Only the secret key can be used to publish (sign events), everything else logs you in read-only mode.</p>




      <button @click="onSubmit" type="button" class="max-w-sm mx-auto flex w-full items-center justify-center rounded-md border border-transparent px-4 py-2 my-6 text-base font-medium text-white shadow-sm bg-colorBtnLight dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark hover:bg-colorBtnHoverLight">
      <ArrowRightOnRectangleIcon class="h-6 w-6 shrink-0 mr-2" />
       Login</button>

  </div>



<h1 class="text-4xl text-left mt-6">Or create an account</h1>
<p class="text-left">Generate a public / private key pair. Do not share your private key with anyone, this acts as your password. Once lost, it cannot be “reset” or recovered. Keep safe!</p>

<BlockNostrRegisterPopup />


                </div>


              </div>



              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>



import { useSettings } from "~/flamewerk/project";

const project = useSettings();

const navigation = project.$state.Headernavigation;

const inputkey = ref('');



import {KeyIcon, ArrowRightOnRectangleIcon} from "@heroicons/vue/24/outline";

import { ref, watch } from "vue";

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

isOpen.value = false;

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


isOpen.value = false;


}


};


// onMounted(() => {
//   let pubkey = "";

//   setTimeout(function () {
//     if (window.nostr) {
//       window.nostr.getPublicKey().then((x) => {
//         console.log("Current pubkey is: ", x);
//         pubkey = x;
//         isOpen.value = false;
//       });
//     } else {
//       isOpen.value = true;
//     }
//   }, 100);
// });
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(true);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
const { t } = useI18n({ useScope: "local" });
</script>

<style type="text/css">
	.st0{fill:#c93b76;}
</style>

<i18n lang="json">
{  
"da": {
    "title": "👀 Du kan se, men du kan ikke røre 🫳 ",
    "message": "Installer venligst en NIP-07 nostr-signeringsbrowserudvidelse (såsom GetAlby eller Nos2x) hvis du vil interagere med ",
    "button":"Got it, tak!",
    },
       "de": {
    "title": "👀 Du kannst es sehen, aber nicht berühren 🫳",
    "message": "Bitte installieren Sie eine NIP-07-Nostr-Signatur-Browser-Erweiterung (wie GetAlby oder Nos2x), wenn Sie mit  ",
    "button": "Hab's verstanden, danke!"
    },
  "en": {
    "title": "👀 You can look but you can't touch 🫳 ",
     "message": "Please install a NIP-07 nostr signing browser extension (such as GetAlby or Nos2x) if you want to interact with ",
     "button":"Got it, thanks!",
    },
     "es": {
    "title": "👀 Puedes mirar, pero no puedes tocar 🫳",
    "message": "¡Instale una extensión del navegador de firma NIP-07 (como GetAlby o Nos2x) si desea interactuar con ",
    "button": "¡Entendido, gracias!"
    },
    "fr": {
    "title": "👀 Tu peux regarder mais tu ne peux pas toucher 🫳 ",
     "message": "Veuillez installer une extension de navigateur de signature NIP-07 (telle que GetAlby ou Nos2x) si vous souhaitez interagir avec !",
     "button":"J'ai compris, merci!",
    },
  "nl": {
    "title": "👀 Je kunt kijken maar je kunt niet aanraken 🫳",
    "message": "Installeer alstublieft een NIP-07 nostr-signeerservice browseruitbreiding (zoals GetAlby of Nos2x) als u wil werken met ",
    "button": "Oké, bedankt!",
  }
}
</i18n>
