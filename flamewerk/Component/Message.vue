<template>
  <div class="bg-colorBgLight dark:bg-colorBgDark max-w-4xl mx-auto">
    <div class="w-full mb-6">
      <div class="w-full">
        <div class="space-y-5 sm:space-y-4 text-center">
          <h2
            class="text-3xl font-bold tracking-tight sm:text-4xl text-colorTxtLight dark:text-colorTxtDark">
            {{ $t("homepage.title") }} {{ project.$state.name }} !
          </h2>
          <p class="text-xl text-gray-500 dark:text-sky-400">
            <!-- {{ $t("homepage.subtitle") }} -->
            {{ $t("homepage.subtitle") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useSettings } from "~/flamewerk/project";

const project = useSettings()

</script>
