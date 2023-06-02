<template>
  <div class="dark:prose-invert prose mx-auto dark:text-white mt-16 text-center max-w-7xl px-5 md:px-0">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>
