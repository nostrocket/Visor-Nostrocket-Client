<template>
  <div class="flex items-center justify-center">
    <button
      type="button"
      @click="openModal"
      class="max-w-sm mx-auto flex w-full items-center justify-center rounded-md border border-transparent px-4 py-2 my-6 text-base font-medium text-white shadow-sm bg-colorBtnLight dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark hover:bg-colorBtnHoverLight"
    ><KeyIcon class="h-6 w-6 shrink-0 mr-2" />
      Register
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
              class="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-gray-900/80 backdrop-blur-sm bg-opacity-[50%] text-left align-middle shadow-xl transition-all"
            >


              <div class="text-white text-center h-full">

              <div class=" w-full">
                <div class=" p-12">
                    <BlockNostrKeyCreate />
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
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>


<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/20/solid";
import {  KeyIcon
} from "@heroicons/vue/24/outline";
export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ChevronDownIcon,
    ChevronUpIcon,
  },
  props: ["toggledown"],
  computed: {
    currentLocale() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>