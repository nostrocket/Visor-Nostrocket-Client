<template>
  <div class="bg-colorBgLight dark:bg-colorBgDark min-h-screen">
    <BlockHeaderTiny v-if="project.$state.headertype == 'Tiny'" />
    <BlockHeaderMinimal v-if="project.$state.headertype == 'Minimal'" />
    <BlockHeaderMaximum v-if="project.$state.headertype == 'Maximum'" />
    <BlockHeaderEcommerce v-if="project.$state.headertype == 'Ecommerce'" />
    <div class="min-h-screen pt-24">
      <slot />
    </div>
    <BlockFooterTiny v-if="project.$state.footertype == 'Tiny'" />
    <BlockFooterMinimal v-if="project.$state.footertype == 'Minimal'" />
     <BlockFooterEcommerce v-if="project.$state.footertype == 'Ecommerce'" />
    <BlockFooterMaximum v-if="project.$state.footertype == 'Maximum'" />
  </div>
</template>
<script setup>
import { useSettings } from "~/flamewerk/project";
const project = useSettings();
</script>

<style lang="scss">
@import '@/flamewerk/Block/Shop/css/weblayout.scss'
</style>