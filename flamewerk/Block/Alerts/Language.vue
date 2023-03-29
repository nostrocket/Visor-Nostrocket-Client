<template>
  <div
    v-if="lang != 'en'"
    class="rounded-md ring-1 ring-colorHighLight dark:ring-colorHighDark p-4 my-6"
  >
    <div class="flex">
      <div class="flex-shrink-0">
        <ExclamationTriangleIcon
          class="h-5 w-5 text-yellow-400"
          aria-hidden="true"
        />
      </div>
      <div class="ml-3">
        <div class="text-sm text-colorTxtLight dark:text-colorTxtDark">
          <p>{{ t("message") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n({ useScope: "local" });

import { ExclamationTriangleIcon } from "@heroicons/vue/20/solid";
const { locale } = useI18n();

const lang = locale.value;
</script>

<i18n lang="json">
{
  "da": {
    "message": "Blogindlæg vises i øjeblikket kun på engelsk.",
    "backbutton": "Gå tilbage"
  },
  "de": {
    "message": "Blogposts werden derzeit nur auf Englisch bereitgestellt.",
    "backbutton": "Geh zurück"
  },
  "en": {
    "message": "Blogpost are currently only served in english.",
    "backbutton": "Go back"
  },
  "es": {
    "message": "Blogpost actualmente solo se sirve en inglés.",
    "backbutton": "Regresa"
  },
  "fr": {
    "message": "Les articles de blog ne sont actuellement servis qu'en anglais.",
    "backbutton": "Retourner"
  },
  "nl": {
    "message": "Blogpost wordt momenteel alleen in het Engels weergegeven.",
    "backbutton": "Ga terug"
  }
}
</i18n>
