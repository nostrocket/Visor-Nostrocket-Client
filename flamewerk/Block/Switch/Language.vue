<template>
  <Popover class="flex mx-auto mt-2" v-slot="{ open }">
    <PopoverButton
      :class="[
        open ? 'text-gray-900' : 'text-gray-500',
        'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none ',
      ]"
    >
      <img
        :src="'/flags/flag_' + this.$i18n.locale + '.svg'"
        alt="flag"
        class="w-8 h-5 ml-4"
      />

      <ChevronDownIcon
        v-if="toggledown"
        :class="[
          open ? 'text-gray-600' : 'text-gray-400',
          'ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-gray-500',
        ]"
        aria-hidden="true"
      />

      <ChevronUpIcon
        v-if="!toggledown"
        :class="[
          open ? 'text-gray-600' : 'text-gray-400',
          'ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-gray-500',
        ]"
        aria-hidden="true"
      />
    </PopoverButton>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <PopoverPanel
        class="rounded-2xl absolute w-48 z-50"
        v-bind:class="[toggledown ? 'right-4' : '']"
      >
        <div
          class="rounded-2xl absolute shadow-xl dark:shadow-colorBgLight/10 ring-1 ring-black ring-opacity-5 w-48"
          v-bind:class="[toggledown ? 'top-14' : 'bottom-4']"
        >
          <div
            class="relative rounded-md grid gap-6 bg-colorSwitchBgLight dark:bg-colorSwitchBgDark px-1 py-1 sm:gap-1 lg:grid-cols-1"
          >
            <nuxt-link
              v-for="locale in currentLocale"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="flex py-1 hover:bg-colorBgDark dark:hover:bg-colorBgLight hover:text-colorTxtDark dark:hover:text-colorTxtLight dark:text-colorTxtDark px-4 rounded inline-block w-full"
              @click="isVisible = !isVisible"
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
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/20/solid";

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
