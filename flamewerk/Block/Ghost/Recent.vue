<template>
  <div
    class="relative bg-colorBgLight dark:bg-colorBgDark px-4 pt-0 sm:px-6 lg:px-8"
  >
    <div class="absolute inset-0">
      <div class="h-1/3 bg-colorBgLight dark:bg-colorBgDark sm:h-2/3" />
    </div>
    <div class="relative mx-auto max-w-7xl">
      <div class="mx-auto grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        <div
          v-for="post in posts"
          :key="post.title"
          class="flex flex-col overflow-hidden rounded-lg shadow-lg dark:shadow-colorBgLight/10 bg-colorBgLight"
        >
          <NuxtLink :to="{ path: `/docs/${post.slug}` }">
            <div class="flex-shrink-0">
              <img
                class="h-48 w-full object-cover"
                :src="post.feature_image"
                alt=""
              />
            </div>
            <div
              class="flex flex-1 flex-col justify-between bg-colorBgLight p-6"
            >
              <div class="flex-1">
                <p class="text-sm font-medium text-indigo-600">
                  <!-- <a :href="post.category.href" class="hover:underline">{{ post.category.name }}</a> -->
                </p>
                <div class="mt-2 block">
                  <p class="truncate text-xl font-semibold text-gray-900">
                    {{ post.title }}
                  </p>
                  <p class="mt-3 text-base text-gray-500 line-clamp-3">
                    {{ post.excerpt }}
                  </p>
                </div>
              </div>
              <div class="mt-6 flex items-center">
                <!-- <div class="flex-shrink-0">
                <div>
                  <span class="sr-only">{{ post.primary_author.name }}</span>
                  <img class="h-10 w-10 rounded-full" :src="post.authors[0].profile_image" :alt="post.primary_author.name" />
                </div>
              </div> -->
                <!-- <div class="">
                <p class="text-sm font-medium text-gray-900">
                  <span class="hover:underline">{{ post.primary_author.name }}</span>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time :datetime="post.published_at">{{ dateFormatted(post.published_at) }}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{{ post.reading_time }} min read</span>
                </div>
              </div> -->
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

const lang = useI18n().locale.value;

const dateFormatted = (date) => {
  return new Intl.DateTimeFormat(lang, options).format(new Date(date));
};

import GhostContentAPI from "@tryghost/content-api";

import { useAPI } from "~/flamewerk/api";

const apisettings = useAPI();

const ghostfilter = "+tags:" + apisettings.$state.ghost.filter;

const api = new GhostContentAPI({
  url: apisettings.$state.ghost.url,
  key: apisettings.$state.ghost.key,
  version: apisettings.$state.ghost.version,
});

// fetch 5 posts, including related tags and authors
const posts = await api.pages
  .browse({
    limit: "3",
    include: "tags,authors,slug",
    filter: "featured:true" + ghostfilter,
  })
  .catch((err) => {
    console.error(err);
  });
</script>
