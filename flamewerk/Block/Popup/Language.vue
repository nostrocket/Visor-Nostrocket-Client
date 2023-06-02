<template>
  <div class="flex items-center justify-center">
    <button
      type="button"
      @click="openModal"
      class=""
    >


      <img
        :src="'/flags/flag_' + this.$i18n.locale + '.svg'"
        alt="flag"
        class="w-8 h-5 "
      />










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
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-colorBgLight dark:bg-colorBgDark p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900 dark:text-white"
              >
                Select Your Language
              </DialogTitle>
              <div class="mt-2">


          <div
            class="relative rounded-md grid gap-6 bg-colorSwitchBgLight dark:bg-colorSwitchBgDark px-1 py-1 sm:gap-1 lg:grid-cols-1"
          >
            <nuxt-link
              v-for="locale in currentLocale"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="flex py-1 hover:bg-colorBgDark dark:hover:bg-colorBgLight hover:text-colorTxtDark dark:hover:text-colorTxtLight dark:text-colorTxtDark px-4 rounded inline-block w-full"
              @click="closeModal"
            >
              <img
                :src="'/flags/flag_' + locale.code + '.svg'"
                alt="flag"
                class="w-8 h-5 my-2 inline"
              />
              <span class="inline ml-4 mt-1.5" :style="styleObject">{{
                locale.name
              }}</span>
            </nuxt-link>
          </div>


              </div>


            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>



<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";




export default {
  components: {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
    ChevronDownIcon,
    ChevronUpIcon,
  },
  data: () => ({
    isOpen: false,
    latest: "",
    leden: "",
  }),
  methods:{

 closeModal() {
  this.isOpen = false;
},
 openModal() {
  this.isOpen = true;
}
  },
  computed: {
    currentLocale() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>