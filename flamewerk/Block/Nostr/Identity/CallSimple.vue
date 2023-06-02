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
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm bg-opacity-[50%] p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-white"
              >

              </DialogTitle>
              <div class="mt-2">


            <img
              v-if="project.$state.logo"
              :class="[project.$state.logodark ? 'block dark:hidden' : '', 'mx-auto mb-2']"
              :src="'/logo/' + project.$state.logoimage"
              :alt="project.$state.name"
              width="80"
              height="80"
            />
            <img
              v-if="project.$state.logodark"
              class="hidden dark:block mx-auto mb-2"
              :src="'/logo/' + project.$state.logodarkimage"
              :alt="project.$state.name"
              width="80"
              height="80"
            />
<div class="inline">
<h2 class="text-4xl font-black text-center dark:text-white text-black mb-0">
  

              <span
              v-if="project.$state.textlogo"

              >{{ project.$state.textlogo }}</span
            >
</h2>
<p class="block text-center text-white text-xl my-6">🦆 A Nostr Client 🚀</p>
</div>
                
                <p class="text-xl text-white text-center mb-2">
                  {{ t("title") }}
                </p>
                <p class="text-sm text-white">
                  {{ t("message") }} {{ project.$state.textlogo }} !
                </p>
              </div>

              <div class="mt-4 text-center">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  {{ t("button") }}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, onMounted } from "vue";



import { useSettings } from "~/flamewerk/project";

const project = useSettings();

const navigation = project.$state.Headernavigation;



onMounted(() => {
  let pubkey = "";

  setTimeout(function () {
    if (window.nostr) {
      window.nostr.getPublicKey().then((x) => {
        console.log("Current pubkey is: ", x);
        pubkey = x;
        isOpen.value = false;
      });
    } else {
      isOpen.value = true;
    }
  }, 100);
});
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
