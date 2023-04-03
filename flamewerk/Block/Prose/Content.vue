<template>
  <div class="dark:prose-invert prose mx-auto dark:text-white pb-16 px-5 md:px-0 backdrop-blur-sm bg-opacity-[50%]">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>
