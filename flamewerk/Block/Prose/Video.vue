<template>




<div class="max-w-4xl  mx-auto">
 <video width="1280" height="960" class="mx-auto my-12" autoplay muted loop>
  <source :src="video.link" type="video/mp4">
  <!-- <source src="/PromoVideo.ogg" type="video/ogg"> -->
Your browser does not support the video tag.
</video> 
</div>






</template>

<script setup>
const video = defineProps({
  link: {
    type: String,
    default: 'https://www.w3schools.com/html/movie.mp4'
  }
})


</script>
