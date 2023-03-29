<template>
  <div
    class="bg-colorBgLight dark:bg-colorBgDark px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
  >
    <div
      class="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl"
    >
      <div>
        <h2
          class="text-3xl font-bold tracking-tight text-colorTxtLight dark:text-colorTxtDark sm:text-4xl"
        >
          Archive publications
        </h2>
        <p
          class="mt-3 text-xl text-colorTxtLight dark:text-colorTxtDark sm:mt-4"
        >
          Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
          massa dictumst amet. Sapien tortor lacus arcu.
        </p>
      </div>
      <div
        class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"
      >
        <div v-for="post in posts" :key="post.title">
          <NuxtLink :to="{ path: `/news/${post.slug}` }">
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
              <div class="flex-shrink-0">
                <div>
                  <span class="sr-only">{{ post.primary_author.name }}</span>
                  <img
                    class="h-10 w-10 rounded-full"
                    :src="post.authors[0].profile_image"
                    alt=""
                  />
                </div>
              </div>
              <div class="ml-3">
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
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  posts: Object,
});

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
