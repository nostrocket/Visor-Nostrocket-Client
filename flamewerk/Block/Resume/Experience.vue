<template>
              <!--Experience ------------------------------------------------------------------------------------------------------>
          <section  class="pb-2 pb-4 mt-4 border-b-4 first:mt-0">
            <!-- To keep in the same column ------------------------------------------------------------------------->
            <div class="break-inside-avoid">
              <h2
                class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
              >
                {{ t('experience') }}
              </h2>
              <!-- IF YOU WANT A DOUBLE COLUMN ADD  w-1/2 inline-block TO THE FOLLOWING SECTION-->
              <section v-for="item in experiences" :key="item" class="mb-2 break-inside-avoid w-1/2 inline-block">
                <header>
                  <h3
                    class="text-lg font-semibold text-gray-650 leading-snugish"
                  >
                    {{item.experience}}
                  </h3>
                  <p class="leading-normal text-md text-gray-550">
                     {{item.experienceyears}} |  {{item.experienceroll}}
                  </p>
                </header>
                <ul class="mt-2.1 text-md text-gray-700 leading-normal">
                  <li v-for="list in item.experiencelist" :key="list">
                    <span
                      class="transform -translate-y-px select-none text-gray-550"
                    >
                      &rsaquo;
                    </span>
                    {{list.listitem}}
                  </li>

                </ul>
              </section>
              <!--                Additional Jobs Would Go Here-->
            </div>
          </section>
</template>
<script setup>


import { useResume } from "~/flamewerk/page";

const resume = useResume();

const experiences = resume.$state.experiences;


const { t } = useI18n({ useScope: "local" });
</script>

<i18n lang="json">
{  
  "en": {
    "experience": "EXPERIENCE"
  },
  "da": {
    "experience": "ERFARING"
  },
  "de": {
    "experience": "ERFAHRUNG"
  },
  "es": {
    "experience": "EXPERIENCIA"
  },
  "nl": {
    "experience": "ERVARING"
  },
  "fr": {
    "experience": "EXPÉRIENCE"
  }
}
</i18n>
