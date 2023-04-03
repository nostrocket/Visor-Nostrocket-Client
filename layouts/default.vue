<template>
  <div class="bg-colorBgLight dark:bg-colorBgDark min-h-screen">
    <div class="">
      <slot />
    </div>
  </div>
</template>
<script setup>

import { useSettings } from "~/flamewerk/project";
const project = useSettings()

</script>