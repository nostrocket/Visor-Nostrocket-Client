<template>
  <article class="grid grid-cols-12 pb-24">
    <div
      class="w-full col-start-1 col-span-12 grid grid-cols-12 dark:text-white"
    >
      <div
        class="md:col-start-3 col-span-12 md:col-span-8 w-full dark:text-white pt-12 px-5"
      >
        <div v-if="!error">
          <button onclick="history.back()" class="block text-gray-400 mt-8">
            ← {{ t("backbutton") }}
          </button>
          <ul v-if="post.tags" class="flex space-x-3 mt-2">
            <li
              class="text-gray-400 font-bold list-none"
              v-for="tag in post.tags"
              :key="tag"
            >
              {{ tag.name }}
            </li>
          </ul>
          <h1 class="text-4xl font-black mt-2">{{ post.title }}</h1>

          <AlertsLanguage />
        </div>
        <div
          v-if="!error"
          class="content mt-4 prose dark:prose-dark max-w-none dark:text-white"
        >
          <div v-html="post.html" class="gh-content gh-canvas"></div>
        </div>

        <!-- <GhostAuthor :postauthor="post.primary_author" :publishdate="post.published_at" /> -->
      </div>
    </div>
  </article>

  <BlockErrorNotFound v-show="error" />
</template>

<script setup>
const { t } = useI18n({ useScope: "local" });

import { ExclamationTriangleIcon } from "@heroicons/vue/20/solid";
import GhostContentAPI from "@tryghost/content-api";

import { useAPI } from "~/flamewerk/api";

const apisettings = useAPI();

const api = new GhostContentAPI({
  url: apisettings.$state.ghost.url,
  key: apisettings.$state.ghost.key,
  version: apisettings.$state.ghost.version,
});

const route = useRoute();

const slugroute = route.params.slug;

const { locale } = useI18n();

const lang = locale.value;

const ghostfilter = "tags:" + apisettings.$state.ghost.filter;

let error = ref(false);

const post = await api.posts
  .read({
    slug: slugroute,
    include: "tags,authors,slug",
    filter: ghostfilter,
  })
  .catch((err) => {
    console.error(err);
    error = ref(true);
    return "";
  });

// console.log(post)
// console.log(post.uuid)
// console.log(slugroute)
</script>

<i18n lang="json">
{
  "da": {
    "message": "Dokumentationsindholdet leveres i øjeblikket kun på engelsk.",
    "backbutton": "Gå tilbage"
  },
  "de": {
    "message": "Der Dokumentationsinhalt wird derzeit nur in englischer Sprache bereitgestellt.",
    "backbutton": "Geh zurück"
  },
  "en": {
    "message": "The documentation content is currently only served in english.",
    "backbutton": "Go back"
  },
  "es": {
    "message": "El contenido de la documentación actualmente solo se ofrece en inglés.",
    "backbutton": "Regresa"
  },
  "fr": {
    "message": "Le contenu de la documentation n'est actuellement servi qu'en anglais.",
    "backbutton": "Retourner"
  },
  "nl": {
    "message": "De inhoud van de documentatie wordt momenteel alleen in het Engels aangeboden.",
    "backbutton": "Ga terug"
  }
}
</i18n>
