<template>
  <footer
    class="bg-colorFooterBgLight dark:bg-colorFooterBgDark border-t border-gray-200"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <NuxtLink :to="localePath('/')" class="flex">
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
          <p
            class="text-base text-colorFooterTxtLight dark:text-colorFooterTxtDark"
          >
            {{ project.$state.tagline }}
          </p>
          <div class="flex space-x-6">
            <!-- <NuxtLink :to="localePath(item.href)" v-for="item in navigation.social" :key="item.name" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6 text-colorHighLight hover:text-colorHoverHighLight dark:text-colorHighDark dark:hover:text-colorHoverHighDark" aria-hidden="true" />
            </NuxtLink> -->

            <BlockSocialsSmall v-if="project.$state.footersocials"/>
          </div>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
          <div class="flex flex-row flex-wrap md:flex-nowrap">


            <div v-for="item in navigation" :key="item.id" class="basis-1/2 md:basis-full">

              <ul role="list" class="mt-4 space-y-4 text-center xl:text-left">
                <li v-for="itemlink in item" :key="itemlink.name">
                  <NuxtLink
                    :to="localePath(itemlink.href)"
                    class="text-base text-gray-500 hover:text-colorTxtLight dark:text-colorTxtDark"
                    >{{ itemlink.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>





            <!-- <div class="mt-12 md:mt-0">
              <h3
                class="text-base font-medium text-colorTxtLight dark:text-colorTxtDark underline"
              >
                Support
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <NuxtLink
                    :to="localePath(item.href)"
                    class="text-base text-gray-500 hover:text-colorTxtLight dark:text-colorTxtDark"
                    >{{ item.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div> -->



            <!-- <div>
              <h3
                class="text-base font-medium text-colorTxtLight dark:text-colorTxtDark underline"
              >
                Company
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <NuxtLink
                    :to="localePath(item.href)"
                    class="text-base text-gray-500 hover:text-colorTxtLight dark:text-colorTxtDark"
                    >{{ item.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div> -->




          </div>
        </div>
      </div>
      <div >
        <div class="flex items-center justify-around mx-auto max-w-sm mt-6">
          <BlockSwitchLanguage v-if="project.$state.footerlanguage" />
          <BlockSwitchTheme v-if="project.$state.footertheme" />
        </div>

        <BlockFooterCopyright />
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from "vue";

import { useSettings } from "~/flamewerk/project";

const project = useSettings();

const navigation = project.$state.Footernavigation.FooterColums;

</script>
