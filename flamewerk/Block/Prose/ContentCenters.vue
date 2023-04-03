<template>
  <div class="dark:prose-invert prose mx-auto dark:text-white mt-12 text-center max-w-7xl px-5 md:px-16 py-48 backdrop-blur-sm bg-opacity-[50%]">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>
