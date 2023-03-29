<template>
  <form
    class="kwes-form"
    action="https://kwesforms.com/api/foreign/forms/uwmjTkGquiThAc0yyxK2"
  >
    <label for="name">Your Name</label>
    <input type="text" name="name" />

    <button type="submit">Submit</button>
  </form>
</template>
<script setup>
// Use import
import kwesforms from "kwesforms";

import { onMounted } from "vue";

onMounted(() => {
  kwesforms.init();
});
</script>
