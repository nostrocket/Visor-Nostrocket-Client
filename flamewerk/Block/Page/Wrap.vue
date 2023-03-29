<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg max-w-5xl mx-auto mb-12">
    <div class="px-4 py-5 sm:px-6">


              <img :src="page.image" alt="Flamewerk" style="width:230px; height:96px">


    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
      <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">

        <slot />
        



      </dl>
    </div>
  </div>










</template>

<script setup>
const page = defineProps({
  image: {
    type: String,
    default: '/stock/Flamewerk-DarkLogo.png'
  }
})


</script>
