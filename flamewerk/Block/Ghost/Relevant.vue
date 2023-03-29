<template>
  <aside
    aria-label="Related articles"
    class="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
  >
    <div class="px-4 mx-auto max-w-screen-xl">
      <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
        Related articles
      </h2>
      <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="post in posts" :key="post.title" class="max-w-xs">
          <NuxtLink :to="{ path: `/news/${post.slug}` }">
            <img
              :src="post.feature_image"
              class="mb-5 rounded-lg h-48"
              alt="Image 1"
            />
          </NuxtLink>
          <h2
            class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white"
          >
            <NuxtLink :to="{ path: `/news/${post.slug}` }">{{
              post.title
            }}</NuxtLink>
          </h2>
          <p
            class="mb-4 font-light text-gray-500 dark:text-gray-400 line-clamp-3"
          >
            {{ post.excerpt }}
          </p>
          <NuxtLink
            :to="{ path: `/news/${post.slug}` }"
            class="inline-flex items-center font-medium underline dark:text-white underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
          >
            {{ post.reading_time }} min read
          </NuxtLink>
        </article>
      </div>
    </div>
  </aside>
</template>

<script setup>
import GhostContentAPI from "@tryghost/content-api";

const props = defineProps({
  postid: String,
});

const filterid = "uuid:-" + props.postid;

import { useAPI } from "~/flamewerk/api";

const apisettings = useAPI();

const api = new GhostContentAPI({
  url: apisettings.$state.ghost.url,
  key: apisettings.$state.ghost.key,
  version: apisettings.$state.ghost.version,
});

const ghostfilter = "+tags:" + apisettings.$state.ghost.filter;

const posts = await api.posts
  .browse({
    limit: "4",
    include: "tags,authors,slug",
    filter: ghostfilter + "+" + filterid,
  })
  .catch((err) => {
    console.error(err);
  });
</script>
