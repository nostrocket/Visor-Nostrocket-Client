<template>
  <footer class="bg-colorFooterBgLight dark:bg-colorFooterBgDark">
    <div class="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      <nav
        class="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        <div v-for="item in navigation.main" :key="item.name" class="px-5 py-2">
          <NuxtLink
            :to="localePath(item.href)"
            class="text-base text-gray-500 hover:text-colorTxtLight dark:text-colorTxtDark"
            >{{ item.name }}</NuxtLink
          >
        </div>
      </nav>
      <div class="mt-8 flex justify-center space-x-6">
        <NuxtLink
          :to="localePath(item.href)"
          v-for="item in navigation.social"
          :key="item.name"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component
            :is="item.icon"
            class="h-6 w-6 text-colorHighLight hover:text-colorHoverHighLight dark:text-colorHighDark dark:hover:text-colorHoverHighDark"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>
      <div class="flex items-center justify-around mx-auto max-w-sm mt-6">
        <BlockSwitchLanguage v-if="project.$state.footerlanguage" />
        <BlockSwitchTheme v-if="project.$state.footertheme" />
      </div>

      <BlockSocialsBasic v-if="project.$state.footersocials"/>

      <BlockFooterCopyright />
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from "vue";

import { useSettings } from "~/flamewerk/project";

const project = useSettings();

const navigation = project.$state.Footernavigation;
</script>
