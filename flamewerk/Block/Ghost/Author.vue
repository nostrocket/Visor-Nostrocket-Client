<template>
  <header class="mt-12 mb-4 lg:mb-6 not-format">
    <address class="flex items-center mb-6 not-italic">
      <div
        class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"
      >
        <!-- <img class="mr-4 w-16 h-16 rounded-full" :src="postauthor.profile_image" :alt="postauthor.name" > -->
        <div>
          <p
            rel="author"
            class="text-xl font-bold text-gray-900 dark:text-white"
          >
            {{ postauthor.name }}
          </p>
          <p class="text-base font-light text-gray-500 dark:text-gray-400">
            {{ postauthor.bio }}
          </p>
          <p class="text-base font-light text-gray-500 dark:text-gray-400">
            <time
              pubdate
              :datetime="dateFormatted(publishdate)"
              :title="dateFormatted(publishdate)"
              >{{ dateFormatted(publishdate) }}</time
            >
          </p>
        </div>
      </div>
    </address>
  </header>
</template>

<script setup>
const props = defineProps({
  postauthor: Object,
  publishdate: String,
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
