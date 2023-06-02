<template>
  <ul class=" pl-0">
    <li v-for="comment in comments" :key="comment.id" class="flex ">
            <NuxtLink
              :to="localePath(comment.url)" class="no-underline">
      <div class="flex-auto">
        <div class="flex items-baseline justify-between gap-x-4">
          <p class="text-sm font-semibold leading-6 text-gray-900 dark:text-white underline">{{ comment.name }}</p>
          <p class="flex-none text-xs text-gray-600  dark:text-white underline">
            <time :datetime="comment.dateTime">{{ comment.date }}</time>
          </p>
        </div>
        <p class="mt-1 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-white no-underline">{{ comment.content }}</p>
      </div>
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
  },
  {
    id: 2,
    name: 'Keys Playground',
    url:
      '/keys',
    content:
      'Generate, Login , Convert, Readout current Key Storage & Validation.',
    date: '/keys',
    dateTime: '2023-03-03T14:02Z',
  },
  {
    id: 3,
    name: 'Profile & Messages',
    url:
      '/messages',
    content:
      'Some of the Examples to render messages, feeds & Profile Information.',
    date: '/Messages',
    dateTime: '2023-03-03T13:23Z',
  },
  {
    id: 4,
    name: 'Nostr Components',
    url:
      '/nostrcomps',
    content:
      'The full dump of Nostr Components to play & build new pages with markdown.',
    date: '/NostrComps',
    dateTime: '2023-03-02T21:13Z',
  },
]
</script>