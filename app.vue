<template>
  <div>
     <div v-if="project.$state.shop" hidden id="snipcart" :data-api-key="project.$state.snipcartid"></div>
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
    { property: "twitter:title", content: "Flamewerk: Nuxt3 Startup Theme" },
    { property: "twitter:image", content: "/Thumbnail.png" },
    {
      property: "twitter:description",
      content:
        "Build Modern Webapps for Free Forever with one easy config, Deploy in less then 5min on any cloudprovider. Create a website, application, shop or community with super documentation and our community.",
    },
  ],
  // link: [
  //   { rel: "preconnect", href: "https://app.snipcart.com" },
  //   { rel: "preconnect", href: "https://cdn.snipcart.com" },
  //   {
  //     rel: "stylesheet",
  //     href: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css",
  //   },
  // ],
  // script: [
  //   { src: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js" },
  // ],
  htmlAttrs: { lang: currentlang },
  bodyAttrs: {
    class: "bg-colorBgLight dark:bg-colorBgDark",
  },
});
</script>
