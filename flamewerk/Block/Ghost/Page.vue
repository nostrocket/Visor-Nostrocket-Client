<template>
  <div
    class="bg-colorBgLight dark:bg-colorBgDark px-4  pb-20 sm:px-6 lg:px-8 "
  >
    <div
      class="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl"
    >
      <div>
        <h2
          class="text-3xl font-bold tracking-tight text-colorTxtLight dark:text-colorTxtDark sm:text-4xl"
        >
          {{ project.$state.name }} Updates
        </h2>
      </div>
      <div
        class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"
      >
        <div v-for="post in posts" :key="post.title">
          <NuxtLink :to="{ path: `/news/${post.slug}` }">
            <div class="flex-shrink-0">
              <img
                class="h-48 w-full object-cover"
                :src="post.feature_image"
                alt=""
              />
            </div>

            <!-- <div>
            <a :href="post.category.href" class="inline-block">
              <span :class="[post.category.color, 'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium']">{{ post.category.name }}</span>
            </a>
          </div> -->
            <div class="mt-4 block">
              <p
                class="line-clamp-1 text-xl font-semibold text-colorTxtLight dark:text-colorTxtDark"
              >
                {{ post.title }}
              </p>
              <p
                class="line-clamp-3 mt-3 text-base text-colorTxtLight dark:text-colorTxtDark"
              >
                {{ post.excerpt }}
              </p>
            </div>
            <div class="mt-6 flex items-center">
              <!-- <div class="flex-shrink-0">
                <div>
                  <span class="sr-only">{{ post.primary_author.name }}</span>
                  <img
                    class="h-10 w-10 rounded-full"
                    :src="post.authors[0].profile_image"
                    alt=""
                  />
                </div>
              </div> -->
              <div class="">
                <p class="text-sm font-medium text-gray-900">
                  <span class="hover:underline dark:text-white">{{
                    post.primary_author.name
                  }}</span>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time :datetime="post.published_at">{{
                    dateFormatted(post.published_at)
                  }}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{{ post.reading_time }} min read</span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- PAGINATION SECTION -->

      <nav
        class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-12"
      >
        <div class="-mt-px flex w-0 flex-1">
          <button
            @click="pagestart--"
            class="inline-flex dark:text-white items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            <ArrowLongLeftIcon
              class="mr-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            {{ t("previous") }}
          </button>
        </div>
        <div
          v-for="index in pages"
          :key="index"
          class="hidden md:-mt-px md:flex"
        >
          <button
            @click="pagestart = index"
            :class="[
              index === pagestart
                ? 'border-colorHighLight dark:border-colorHighDark text-colorHighLight dark:text-colorHighDark'
                : '',
            ]"
            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-900 dark:text-white hover:border-gray-300 hover:text-gray-700"
          >
            {{ index }}
          </button>
        </div>
        <div class="-mt-px flex w-0 flex-1 justify-end">
          <button
            @click="pagestart++"
            class="inline-flex dark:text-white items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            {{ t("next") }}
            <ArrowLongRightIcon
              class="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { useSettings } from "~/flamewerk/project";
const project = useSettings();

import GhostContentAPI from "@tryghost/content-api";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/vue/20/solid";

const { t } = useI18n({ useScope: "local" });

import { ref, watch, onMounted } from "vue";

import { useAPI } from "~/flamewerk/api";

const apisettings = useAPI();

const api = new GhostContentAPI({
  url: apisettings.$state.ghost.url,
  key: apisettings.$state.ghost.key,
  version: apisettings.$state.ghost.version,
});

const ghostfilter = "+tags:" + apisettings.$state.ghost.filter;

const pagestart = ref(1);

const allposts = async () => {
  await api.posts
    .browse({
      page: pagestart.value,
      limit: "6",
      include: "tags,authors,slug",
      filter: "featured:false" + ghostfilter,
    })
    .then((response) => {
      posts.value = response;
      pages.value = response.meta.pagination.pages;
      // console.log(pages)
    })
    .catch((err) => {
      console.error(err);
    });
};

watch(pagestart, (newValue, oldValue) => {
  // console.log(newValue, oldValue);
  if (newValue !== oldValue) {
    allposts();
    // console.log(meta._rawValue.pagination)
  }
});

onMounted(() => {
  allposts();
});

const posts = ref();
const pages = ref();

const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

const lang = useI18n().locale.value;

const dateFormatted = (date) => {
  return new Intl.DateTimeFormat(lang, options).format(new Date(date));
};
</script>

<i18n lang="json">
{
  "da": {
    "previous": "Tidligere",
    "next": "Næste"
  },
  "de": {
    "previous": "Vorherige",
    "next": "Nächste"
  },
  "en": {
    "previous": "Previous",
    "next": "Next"
  },
  "es": {
    "previous": "Anterior",
    "next": "Próximo"
  },
  "fr": {
    "previous": "Précédent",
    "next": "Prochain"
  },
  "nl": {
    "previous": "Vorige",
    "next": "Volgende"
  }
}
</i18n>
