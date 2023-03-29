<template>

  <div>
    <div class="lg:hidden" v-show="!showMobileMenu">
      <div class="fixed inset-0 flex z-40 ">

        <div class="fixed inset-0">
          <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>

        <div
          class="relative flex-1 flex flex-col max-w-xs w-full bg-gray-300 dark:bg-gray-800"
        >
          <div class="absolute top-0 right-0 -mr-12 pt-2">
            <button
              @click="togglemenu"
              class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Close sidebar</span>
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">


        <div>
          <NuxtLink :to="localePath('/')" class="flex ml-4">
            <span class="sr-only">{{ project.$state.name }}</span>

            <img
              v-if="project.$state.logo"
              :class="[project.$state.logodark ? 'block dark:hidden' : '', '']"
              :src="'/logo/' + project.$state.logoimage"
              :alt="project.$state.name"
              width="40"
              height="40"
            />
            <img
              v-if="project.$state.logodark"
              class="hidden dark:block"
              :src="'/logo/' + project.$state.logodarkimage"
              :alt="project.$state.name"
              width="40"
              height="40"
            />

            <span
              v-if="project.$state.textlogo"
              class="mt-1.5 ml-4 text-xl font-bold dark:text-white"
              >{{ project.$state.textlogo }}</span
            >
          </NuxtLink>
        </div>



            <nav class="mt-5 px-2 space-y-1 responsive">



        <NuxtLink
          :to="localePath(item.href)"
          v-for="item in navigation.basicmenu"
          :key="item.name"
          class="text-gray-800 dark:text-white hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-lg font-medium rounded-md"
          >{{ item.name }}</NuxtLink
        >





            </nav>
          </div>
          <div class="flex-shrink-0 flex bg-gray-400 dark:bg-gray-700 p-4">
            <div class="flex-shrink-0 w-full group block">

        <div class="flex items-center justify-around mx-auto max-w-sm ">
          <BlockSwitchLanguage v-if="project.$state.footerlanguage" />
          <BlockSwitchTheme v-if="project.$state.footertheme" />
        </div>
 
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 w-14">
        </div>
      </div>
    </div>

    <div class="hidden lg:flex md:flex-shrink-0 min-h-screen">
      <div class="flex flex-col w-64">
        <div class="flex flex-col h-0 flex-1 bg-gray-300 dark:bg-gray-800">
          <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div>
          <NuxtLink :to="localePath('/')" class="flex ml-4">
            <span class="sr-only">{{ project.$state.name }}</span>

            <img
              v-if="project.$state.logo"
              :class="[project.$state.logodark ? 'block dark:hidden' : '', '']"
              :src="'/logo/' + project.$state.logoimage"
              :alt="project.$state.name"
              width="40"
              height="40"
            />
            <img
              v-if="project.$state.logodark"
              class="hidden dark:block"
              :src="'/logo/' + project.$state.logodarkimage"
              :alt="project.$state.name"
              width="40"
              height="40"
            />

            <span
              v-if="project.$state.textlogo"
              class="mt-1.5 ml-4 text-xl font-bold dark:text-white"
              >{{ project.$state.textlogo }}</span
            >
          </NuxtLink>
        </div>
            <nav
              class="mt-5 flex-1 px-2 bg-gray-300 dark:bg-gray-800 space-y-1"
            >



        <NuxtLink
          :to="localePath(item.href)"
          v-for="item in navigation.basicmenu"
          :key="item.name"
          class="text-gray-800 dark:text-white hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-lg font-medium rounded-md"
          >{{ item.name }}</NuxtLink
        >









            <div class="pt-6 flex justify-between " v-if="project.$state.shop">
<BlockShopMenu />
            </div>











            </nav>
          </div>

          <div class="flex-shrink-0 flex bg-gray-400 dark:bg-gray-700 p-4">
            <div class="flex-shrink-0 w-full group block">

        <div class="flex items-center justify-around mx-auto max-w-sm ">
          <BlockSwitchLanguage v-if="project.$state.footerlanguage" />
          <BlockSwitchTheme v-if="project.$state.footertheme" />
        </div>
 
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="fixed bg-colorHeaderBgLight dark:bg-colorHeaderBgDark w-full z-30 flex shadow-lg dark:shadow-gray-100/10"
    >
      <div class="          basis-1/2
          flex
          items-center
          justify-between
          px-4
          py-5
          sm:px-6 sm:py-4
          md:justify-start md:space-x-10">
        <div>
          <NuxtLink :to="localePath('/')" class="flex">
            <span class="sr-only">{{ project.$state.name }}</span>

            <img
              :class="[project.$state.logodark ? 'block dark:hidden' : '', '']"
              :src="'/logo/' + project.$state.logoimage"
              :alt="project.$state.name"
              width="40"
              height="40"
            />
            <img
              v-if="project.$state.logodark"
              class="hidden dark:block"
              :src="'/logo/' + project.$state.logodarkimage"
              :alt="project.$state.name"
              width="40"
              height="40"
            />

            <span
              v-if="project.$state.textlogo"
              class="mt-1.5 ml-4 text-xl font-bold dark:text-white"
              >{{ project.$state.textlogo }}</span
            >
          </NuxtLink>
        </div>
      </div>

      <div
        class=" flex my-2 mr-2 lg:hidden basis-1/2 flex-row-reverse"
      >

        <button
          @click="togglemenu"
          class="dark:bg-colorBgLight bg-colorBgDark rounded w-12 h-10 mt-3 mr-3"
        >
          <span class="sr-only">Open sidebar</span>
          <!-- Heroicon name: menu -->
          <svg
            class="h-6 w-6 mx-auto text-white dark:text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>


<BlockShopMenu />








        
      </div>




    </div>
  </div>
</template>
<script setup>

import { useSettings } from "~/flamewerk/project";

const project = useSettings();

const navigation = project.$state.Headernavigation;

let showMobileMenu = ref(true)

function togglemenu() {
  showMobileMenu.value = !showMobileMenu.value
}


</script>

<style>
nav .nuxt-link-exact-active {
  background-color: #2a3243;
  color: #fff !important;
}
</style>
