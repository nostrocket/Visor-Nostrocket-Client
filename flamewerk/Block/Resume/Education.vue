<template>
              <section class="pb-2 pb-2 mt-4 border-b-4 first:mt-0 ">
            <!-- To keep in the same column -->
            <div class="break-inside-avoid">
              <h2
                class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
              >
                {{ t('education') }}
              </h2>
              <!-- school --------------------------------------------------------------------------->
              <section v-for="item in education" :key="item" class=" mb-4 border-b-2 break-inside-avoid w-1/2 inline-block">
                <header>
                  <h3
                    class="flex-grow text-lg font-semibold text-gray-700 leading-snugish"
                  >
                      {{item.title}}
                  </h3>
                  <p class="leading-normal text-md text-gray-550">
                    {{item.years}} | {{item.school}} 
                  </p>
                </header>

              </section>





              </div>
          </section>
</template>
<script setup>

import { useResume } from "~/flamewerk/page";

const resume = useResume();

const education = resume.$state.education;

const { t } = useI18n({ useScope: "local" });
</script>

<i18n lang="json">
{  
  "en": {    
    "education": "EDUCATION",
  },
  "da": {
    "education": "UDDANNELSE",
  },
  "de": {
    "education": "BILDUNG",
  },
  "fr": {
    "education": "ÉDUCATION",
  },
  "es": {
    "education": "EDUCACIÓN",
  },
  "nl": {
    "education": "OPLEIDING",
  }
}

</i18n>