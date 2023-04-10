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
    { property: "twitter:image", content: "/Thumbnailed.png" },
    {
      property: "twitter:description",
      content:
        "VISØR: Nostrocket Client",
    },
  ],
  script: [
    { src: "/libs/nostr.bundle.js" },
    { src: "/libs/kind0.js" },
    { src: "/libs/showdown.min.js" },
     { src: "/libs/pubkey.js" },
    { src: "/libs/state.js" },
    { src: "/libs/utils.js" },
  ],

  htmlAttrs: { lang: currentlang },
  bodyAttrs: {
    class: "bg-colorBgLight dark:bg-colorBgDark",
  },
});
</script>
