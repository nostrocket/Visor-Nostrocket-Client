// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  components: {
    global: true,
    dirs: ["~/flamewerk"],
  },
  modules: [
    "@nuxtjs/robots",
    "@kevinmarrec/nuxt-pwa",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],

  pwa: {
    meta: {
      title: "Visør: a Nostrocket Client",
      name: "Visør",
      description:
        "A Nostrocket Client",
      ogImage: {
        path: "https://nostrocket.pages.dev/Thumbnail.png",
        width: 1200,
        height: 627,
        type: "image/png",
      },
      twitterCard: "summary_large_image",
      ogUrl: "https://nostrocket.org/",
    },
  },

  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if no system preference found
    classSuffix: "", // This removed the classSuffix provided by Color Mode / Tailwind Darkmode Hookup
  },

  i18n: {
    // baseUrl: process.env.BASE_URL || "http://localhost:3000",
    defaultLocale: "en",
    detectBrowserLanguage: false,
    locales: [
      {
        code: "da",
        iso: "da-DA",
        name: "Dansk",
        file: "da-DA.json",
      },
      {
        code: "de",
        iso: "de-DE",
        name: "Deutsch",
        file: "de-DE.json",
      },
      {
        code: "en",
        iso: "en-GB",
        name: "English",
        file: "en-GB.json",
      },
      {
        code: "es",
        iso: "es-ES",
        name: "Español",
        file: "es-ES.json",
      },
      {
        code: "fr",
        iso: "fr-FR",
        name: "Français",
        file: "fr-FR.json",
      },
      {
        code: "nl",
        iso: "nl-NL",
        name: "Nederlands",
        file: "nl-NL.json",
      },
    ],
    lazy: true,
    langDir: "locales",
  },

  content: {
    defaultLocale: "en",
    sources: {
      // Additional sources
      flamewerk: {
        driver: "fs",
        base: "./flamewerk/Content/", // Path for source directory
      },
    },
  },

  tailwindcss: {
    config: {
      content: [
        `./flamewerk/Block/**/*.{vue,js,ts}`,
        `./flamewerk/Component/*.{vue,js,ts}`,
      ],
    },
  },
});
