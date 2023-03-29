<template>

                    <div  class="bg-colorHeaderBgMenuPopupFooterLight dark:bg-colorHeaderBgMenuPopupFooterDark px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                      <div>
                        <h3 class="text-base font-medium text-colorTxtLight dark:text-colorTxtDark">From the blog</h3>
                        <ul role="list" class="mt-6 space-y-6">

                          <li v-for="post in posts" :key="post.slug" class="flow-root py-1">
                            <NuxtLink :to="{ path:`/news/${post.slug}` }" class="-m-3 flex rounded-lg bg-colorHeaderBgMenuPopupLinkLight hover:bg-colorHeaderBgMenuPopupLinkHoverLight dark:hover:bg-colorHeaderBgMenuPopupLinkHoverDark dark:bg-colorHeaderBgMenuPopupLinkDark">
                              <PopoverButton class="flex w-full p-3">
                              <div class="hidden flex-shrink-0 sm:block">
                                <img class="h-20 w-32 rounded-md object-cover" :src="post.feature_image" alt="" />
                              </div>
                              <div class="w-0 flex-1 sm:ml-8 text-left">
                                <h4 class="truncate text-base font-medium text-colorTxtLight dark:text-colorTxtDark line-clamp-1">{{ post.title }}</h4>
                                <p class="mt-1 text-sm text-gray-500 line-clamp-2">{{ post.excerpt }}</p>
                              </div>
                              </PopoverButton>
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-6 text-sm font-medium">
                        <NuxtLink :to="localePath('/blog')" class="text-colorHighLight hover:text-colorHighLight dark:text-colorHighDark dark:hover:text-colorHoverHighDark">
                          <PopoverButton>
                          View all posts
                          <span aria-hidden="true"> &rarr;</span>
                          </PopoverButton>
                        </NuxtLink>
                      </div>
                    </div>



</template>

<script setup>


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
      limit: "2",
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