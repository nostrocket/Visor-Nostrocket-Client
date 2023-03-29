<template>
              <section class="pb-4 mt-4 border-b-4 first:mt-0">
            <!-- To keep in the same column -->
            <div class="break-inside-avoid">
              <h2
                class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
              >
                {{ t('skills') }}
              </h2>
              <!--Full Stack Development ------------------------------------------------------------------------------------------->
              <section v-for="item in list" :key="item" class="mb-2 break-inside-avoid">
                <header>
                  <h3
                    class="text-lg font-semibold text-gray-700 leading-snugish"
                  >
                    {{item.title}}
                  </h3>
                </header>

                <div class="my-1 last:pb-1">
                  <ul
                    class="flex flex-wrap text-sm2 leading-relaxed -mr-1.6 -mb-1 dark:text-wblack"
                  >
                    <li
                      class="px-2.5 mr-1.6 mb-1 text-gray-900 leading-relaxed print:bg-white print:border-inset bg-gray-250 dark:text-black"
                      v-for="listitem in item.listitems" :key="listitem"
                    >
                      {{listitem}}
                    </li>

                  </ul>
                </div>
              </section>


            </div>
          </section>
</template>
<script setup>


import { useResume } from "~/flamewerk/page";

const resume = useResume();

const list = resume.$state.list;


const { t } = useI18n({ useScope: "local" });
</script>

<i18n lang="json">
{
"en": {
"skills": "SKILLS"
},
"da": {
"skills": "FÆRDIGHEDER"
},
"de": {
"skills": "FÄHIGKEITEN"
},
"fr": {
"skills": "COMPÉTENCES"
},
"es": {
"skills": "HABILIDADES"
},
"nl": {
"skills": "VAARDIGHEDEN"
}
}
</i18n>