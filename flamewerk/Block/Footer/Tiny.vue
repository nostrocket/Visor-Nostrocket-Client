<template>
  <div
    class=" w-full mx-auto mb-12"
  >
    <div class="flex items-center justify-around mx-auto max-w-sm mt-6 mb-6 dark:text-white text-black">
      <BlockSwitchLanguage v-if="project.$state.footerlanguage" />

      <BlockSwitchTheme v-if="project.$state.footertheme" />
    </div>

    <BlockSocialsBasic v-if="project.$state.footersocials"/>

    <BlockFooterCopyright class="dark:text-white text-black"/>
  </div>
</template>
<script setup>
import { useSettings } from "~/flamewerk/project";
const project = useSettings();
</script>
