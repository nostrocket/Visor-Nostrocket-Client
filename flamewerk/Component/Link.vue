<template>
    <div class="border dark:border-white rounded-xl px-4 my-4">
        <NuxtLink
              :to="localePath(props.route)" class="no-underline">
      <div class="flex-auto">
        <div class="flex items-baseline justify-between gap-x-4">
          <p class="text-sm font-semibold leading-6 text-gray-900 dark:text-white underline">{{ props.title }}</p>
        </div>
        <p class="mt-1 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-white no-underline">{{ props.content }}</p>
      </div>
            </NuxtLink>
    </div>
</template>
<script setup>

const props = defineProps({
  title: String,
  content: String,
  route: String,
})

</script>