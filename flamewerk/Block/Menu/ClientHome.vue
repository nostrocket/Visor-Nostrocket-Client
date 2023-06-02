<template>
  <ul class="py-0 my-0 pl-0">
    <li v-for="comment in comments" :key="comment.id" class="flex">
            <NuxtLink
              :to="localePath(comment.url)" class="inline-flex justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2">
              Go Back to Client Home
            </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const comments = [
  {
    id: 1,
    name: 'Client Homepage',
    url:
      '/client',
    content:
      'A showcase of some cool and basic Nostr Components & Integrations.',
    date: '/client',
    dateTime: '2023-03-04T15:54Z',
  }
]
</script>