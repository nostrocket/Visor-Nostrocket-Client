<template>
  <div
    class="text-center text-colorFooterTxtLight dark:text-colorFooterTxtDark w-full my-6"
  >
    {{ project.$state.name }} © {{ currentDate.getFullYear() }}.
    {{ $t("footer.rights") }}
  </div>
</template>

<script setup>
import { useSettings } from "~/flamewerk/project";

const project = useSettings();
const currentDate = new Date();
</script>
