<template>
  <div
    class="flex min-h-full flex-col bg-colorBgLight dark:bg-colorBgDark pt-16 pb-12"
  >
    <main
      class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8"
    >
      <div class="flex flex-shrink-0 justify-center">
        <a href="/" class="inline-flex">
          <span class="sr-only">{{ project.$state.name }}</span>
          <img
            :class="[project.$state.logodark ? 'block dark:hidden' : '', '']"
            :src="'/logo/' + project.$state.logoimage"
            :alt="project.$state.name"
            width="120"
            height="120"
          />
          <img
            v-if="project.$state.logodark"
            class="hidden dark:block"
            :src="'/logo/' + project.$state.logodarkimage"
            :alt="project.$state.name"
            width="120"
            height="120"
          />
        </a>
      </div>
      <div class="pt-6 pb-16">
        <div class="text-center">
          <h1
            class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-colorTxtLight dark:text-colorTxtDark"
          >
            Empty Page.
          </h1>
          <p class="mt-2 text-base text-colorTxtLight dark:text-colorTxtDark">
            The Page exists but has no content.
          </p>
          <div class="mt-6">
            <NuxtLink
              :to="localePath('/')"
              class="text-base font-medium text-colorHighLight dark:text-colorHighDark"
            >
              Go back home
              <span aria-hidden="true"> &rarr;</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
    <footer class="mx-auto w-full max-w-7xl flex-shrink-0 px-6 lg:px-8">
      <BlockSocialsSmall class="max-w-fit mx-auto" />
    </footer>
  </div>
</template>
<script setup>
import { useSettings } from "~/flamewerk/project";

const project = useSettings();
</script>
