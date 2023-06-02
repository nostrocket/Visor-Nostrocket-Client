<template>
  <div class="ml-4 flex items-center justify-center">
    <button
      type="button"
      @click="openModal"
      class="inline-flex justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
    >
      <span class="sr-only">Nostr</span>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        class="h-5 w-5 mr-2 fill-white hover:fill-white dark:fill-white hover:fill-colorHoverHighDark"
        viewBox="0 0 875 875"
        style="enable-background: new 0 0 875 875"
        xml:space="preserve"
      >
        <path
          class=""
          d="M684.7,485.6c0.2,12.6-11.9,51.5-38.7,81.3c-26.7,29.8-56,20.8-58.4,20.2s-3.1-4.5-7.9-3.8s-9.6,6.2-18.9,7.2
	s-17.5,1.7-26.1-1.4c-4.5,0.7-5.1,0.7-7.2,2.2s-17.8,10.8-21.6,11.5c0,7.2-1.4,44.6,0,55.9s3.8,25.7,7.5,36s2.7,10.6,7.5,9.9
	s13.4,0.3,15.8,4.1c2.4,3.8,1.4,6.5,5.5,8.2s60.7,17.1,99.4,19.2c26.7,0.7,42.9,2.7,52.1,19.5c1.4,7.9,7.5,13,11.3,14.1
	s8.2,2.1,12,5.8s1,8.2,5.5,11.7c4.5,3.4,14.7,8.6,25.4,13.7s15.1,13.4,15.8,16.1s1.7,11,1.7,11s-8.9,0-11-2.1s-2.7-5.8-2.7-5.8
	s-6.2,1-7.5,3.4s0.7,2.7-7.9,0.7s-11.7-3.8-18.2-8.6s-16.5-17.1-25-16.8c4.1,8.2,5.8,8.2,10.6,11s8.2,5.8,8.2,5.8l-7.2,4.5
	c0,0-4.5,2.1-14.7-0.7s-11.7-4.5-12.7-10.6s0-9.3-2.7-14.4s-4.1-15.8-22.3-21.3c-18.2-5.5-66.5-21.3-100.1-24.7s-22.6-2.7-28.1-1.4
	s-15.8,4.5-26.4-1.4S481,732,480.3,725.5s-1.7-11,0-19.2s3.4-19.9,1.7-26.7s-14.1-55.9-19.9-64.1c-13,1-50.7-0.7-50.7-0.7
	s-2.4-0.7-17.5,5.8s-36.5,13.8-46.8,19.9s-14.4,9.7-16.1,13.1c0.1,3-1.2,7.7-2.8,9.1s-12.5,2.4-12.5,2.4s-5.9,5.9-8.2,10
	c-6.9,9.6-55.2,125.1-66.5,149.8c-13.5,32.6-9.8,27.4-37.7,27.4s-8.1,0.3-8.1,0.3s-12.3,5.9-16.8,5.9s-18.9-2.4-26.4,0
	s-16.5,9.3-23.3,10.3s-4.9-1.3-8.4-3.7c-4-0.2-14.3-0.1-14.3-0.1s1.7-6.5,7.9-10.9c8.2-5.8,25.4-16.1,34.6-21.3s17.5-7.9,23.3-9.3
	s18.5-6.2,30.5-9.9s19.5-8.2,29.8-31.5s50.4-111.4,51.4-116.2c0.6-3,3.7-6.5,4.8-15.1c0.7-5.3-2.5-13,1.7-22.6
	c11-25,21.6-20.2,26.4-20.2s17.1,0.3,26.4-1.4s15.4-2.7,24.7-7.9s11.3-8.9,11.3-8.9l-19.9-3.4c0,0-18.5,0.7-25-4.5
	s-15.4-15.8-15.4-15.8l-7.5-7.2l1,8.6c0,0-5.1-8.9-6.5-10.3s-8.6-6.5-11.3-11.3s-7.5-25-7.5-25l-6.2,13l-1.7-18.9l-5.1,7.2
	l-2.7-16.1l-4.8,8.2l-3.4-14.4l-5.8,4.5l-2.4-10.3l-5.8-3.4c0,0-14.1-9.3-16.5-9.6s-4.5,3.4-4.5,3.4l1.4,12l-12.2-6.3l-7-11.9
	c0,0,2.4,4-9.6,7.5c-20.6,0-21.9-2.3-24.9-3.9c-1.3-6.6-5.6-10.1-5.6-10.1h-20.6l-0.3-6.9L141,468l0.7-10.3h-14.1l1-11.3h-8.9
	c0,0,3.1-9.3,25.7-23s25-16.5,46.3-17.1c21.3-0.7,32.9,2.7,46.3,8.2s38.7,13.7,43.9,17.5c11.3-9.9,28.5-19.9,34.3-19.9
	c1-2.4,6.2-12.3,18-17.6c35.3-15.8,108.1-34,131.5-35.5c31.2-2.1,7.9-1.4,39.1,2.1s54.2,7.5,69.6,12.7c12.6,4.2,25,9.6,34.3,2.1
	c4.3-1.8,11.8-1.3,17.8-5.1c30.7-25.1,34.7-32.4,43.6-42s20.1-24.9,22.5-45.1s4.5-58.3-10.6-88.1s-28.8-45.3-34.6-69.3
	s-8.2-61-6.2-73s5.1-22.3,6.9-30.5S658.1,7.9,668,6.2c9.9-1.7,17.8,1.4,22.3,4.8c4.5,3.4,11.7,6.3,13.4,10.3
	c0.3,1.7-1.4,6.5,8.2,8.2c9.6,1.7,16,4.2,16,4.2s15.6,4.3,3.1,7.7c-12.7,2.1-20.5-0.7-24.3,1.7s-7.2,10.1-9.6,11.1s-7.2,0.3-12,4.1
	s-9.6,6.9-12.7,14.4s-5.5,15.8-3.4,26.7s8.6,31.5,14.4,43.2s20.2,40.8,24.3,47.7s15.8,29.5,16.8,53.8s1,44.2,0,54.9
	s-10.8,51.6-35.5,85.9c-8.2,14.1-23.2,31.9-24.7,35c-1.5,3.1-3,4.9-1.6,7.6c4.6,9,12.9,22.1,14.7,29.2
	C679.8,463.5,684.5,473,684.7,485.6L684.7,485.6z"
        />
      </svg>

      Login
    </button>
  </div>
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
