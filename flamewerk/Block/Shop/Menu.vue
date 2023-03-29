<template>
                <div class="flex mt-1" v-if="project.$state.shop">
              <BlockShopIconsSearch class="mr-3 hidden" />

              <button
                class="
                  snipcart-customer-signin
                  appearance-none
                  px-2
                  text-gray-800
                  hover:text-blue-600
                  rounded-md
                  cursor-pointer
                  focus:outline-none focus:text-blue-600
                  transition
                  relative
                  mr-3
                "
                aria-label="User login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 fill-current dark:text-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                  />
                </svg>
              </button>


              <BlockShopIconsWish class="mr-3 hidden"/>


              <button class="snipcart-checkout flex items-center mr-3">
                <BlockShopIconsCart />
              </button>
            </div>
</template>
<script setup>

import { useSettings } from "~/flamewerk/project";

const project = useSettings();

</script>
