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
      title: "Flamewerk: Nuxt3 Startup Theme ",
      name: "Flamewerk",
      description:
        "🔥  Build Modern Webapps for Free Forever with one easy config, Deploy in less then 5min on any cloudprovider. Create a website, application, shop or community with super documentation and our community.",
      ogImage: {
        path: "https://flamewerk.com/Thumbnail.png",
        width: 1200,
        height: 627,
        type: "image/png",
      },
      twitterSite: "https://twitter.com/flamewerk",
      twitterCard: "summary_large_image",
      twitterCreator: "@flamewerk",
      ogUrl: "https://flamewerk.com/",
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
