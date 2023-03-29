<template>


        <div class="sm:col-span-2">
          <dt class="text-sm font-medium text-gray-500">{{page.title}}</dt>
          <dd class="mt-1 text-sm text-gray-900"><slot /></dd>
        </div>



</template>

<script setup>
const page = defineProps({
  title: {
    type: String,
    default: 'Place Holder Title'
  }
})


</script>
