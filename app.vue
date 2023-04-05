<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
const currentlang = useI18n().locale.value;

import { useSettings } from "~/flamewerk/project";
const project = useSettings();

useHead({
  meta: [
    { property: "twitter:title", content: "VISØR: Nostrocket Client" },
    { property: "twitter:image", content: "/Thumbnail.png" },
    {
      property: "twitter:description",
      content:
        "VISØR: Nostrocket Client",
    },
  ],

  htmlAttrs: { lang: currentlang },
  bodyAttrs: {
    class: "bg-colorBgLight dark:bg-colorBgDark",
  },
});
</script>
