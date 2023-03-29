<template>
  <div
    class="bg-colorBgLight dark:bg-colorBgDark w-full text-colorTxtLight dark:text-colorTxtDark mb-6"
  >
    <div class="w-full text-center pt-12">
      <span class="sr-only">Flamewerk</span>

      <img
        :class="[project.$state.logodark ? 'block dark:hidden' : '', 'mx-auto']"
        :src="'/logo/' + project.$state.logoimage"
        :alt="project.$state.name"
        width="120"
        height="120"
      />
      <img
        v-if="project.$state.logodark"
        class="hidden dark:block mx-auto"
        :src="'/logo/' + project.$state.logodarkimage"
        :alt="project.$state.name"
        width="120"
        height="120"
      />

      <div class="my-4">
        <NuxtLink
          :to="localePath(item.href)"
          v-for="item in navigation.basicmenu"
          :key="item.name"
          class="text-base mx-12 underline text-gray-500 hover:text-colorTxtLight dark:text-colorTxtDark"
          >{{ item.name }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { useSettings } from "~/flamewerk/project";
const project = useSettings();
const navigation = project.$state.Headernavigation;
</script>
