<template>
  <p>
    I'm feeling {{ test.icon }} today!
  </p>
</template>

<script setup>
const test = defineProps({
  icon: {
    type: String,
    default: '🙂'
  }
})


console.log("lol" + test.icon);

</script>
