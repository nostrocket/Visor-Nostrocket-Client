<template>
  <article class="grid grid-cols-12 pb-24">
    <div
      class="w-full col-start-1 col-span-12 grid grid-cols-12 dark:text-white"
    >
      <div
        class="mt-12 lg:mt-0 ml-12 md:ml-12 lg:ml-6 col-span-10 lg:col-span-10 w-full dark:text-white px-5 max-w-4xl"
      >
        <div v-if="!error">
          <h1 class="text-4xl font-black mt-2">{{ post.title }}</h1>
          <div
            v-if="lang != 'en'"
            class="rounded-md ring-1 ring-colorHighLight dark:ring-colorHighDark p-4 mt-6"
          >
            <div class="flex">
              <div class="flex-shrink-0">
                <ExclamationTriangleIcon
                  class="h-5 w-5 text-yellow-400"
                  aria-hidden="true"
                />
              </div>
              <div class="ml-3">
                <div class="text-sm text-colorTxtLight dark:text-colorTxtDark">
                  <p>{{ t("message") }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="!error"
          class="content mt-4 prose dark:prose-dark dark:prose-invert max-w-none dark:text-white"
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
definePageMeta({
  layout: "community",
});

const { t } = useI18n({ useScope: "local" });

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

const post = await api.pages
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

<style lang="scss">
@import '@/flamewerk/Block/Ghost/css/blogstyling.scss'
</style>