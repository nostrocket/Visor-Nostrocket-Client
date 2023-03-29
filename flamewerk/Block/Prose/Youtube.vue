<template>




<div class="max-w-md mx-auto">
	<div 
    	class="relative h-0 overflow-hidden max-w-full w-full mx-auto" 
		style="padding-bottom: 56.25%"
 	>
		<iframe
       		:src="video.link"
            frameborder="0"
            allowfullscreen
            class="absolute top-0 left-0 w-full h-full"
        ></iframe>
	</div>
</div>



</template>

<script setup>
const video = defineProps({
  link: {
    type: String,
    default: 'https://youtu.be/embed/dQw4w9WgXcQ'
  }
})


</script>
