<template>
  <div class="bg-colorBgLight dark:bg-colorBgDark text-center">
    <h2
      class="text-3xl font-bold tracking-tight sm:text-4xl text-colorTxtLight dark:text-colorTxtDark"
    >
     {{ t('hello') }} {{ project.$state.name }}
    </h2>
  </div>
</template>
<script setup>
import { useSettings } from "~/flamewerk/project";
const project = useSettings();
const { t } = useI18n({ useScope: "local" });
</script>

<i18n lang="json">
{  
  "da": {    
    "hello": "Hej og velkommen til " 
    },  
  "de": {    
    "hello": "Hallo und willkommen bei "  
    },
  "en": {
    "hello": "Hello and welcome at "
    },
  "es": {
    "hello": "Hola y bienvenidos a "
    },
  "fr": {
    "hello": "Bonjour et bienvenue chez " 
    },
  "nl": {
    "hello": "Ahoy en welkom bij " 
  }
}
</i18n>