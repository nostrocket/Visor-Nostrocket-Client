<template>
    
          <!--Projects ---------------------------------------------------------------------------------------------------------->
          <section class="pb-2 pb-2 mt-4 border-b-4 first:mt-0">
            <div class="break-inside-avoid">
              <!-- To keep in the same column -->
              <h2
                class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
              >
                {{ t('projects') }}
              </h2>
              <!--Project 1 --------------------------------------------------------------------------------------------------------->
              <section v-for="item in projects" :key="item" class="pb-2 mb-2 border-b-2 break-inside-avoid">
                <header>
                  <h3
                    class="text-lg font-semibold text-gray-700 leading-snugish"
                  >
                    <a
                      :href="item.projectlink"
                      target="_blank"
                      class="group"
                    >
                      {{item.projectname}}
                      <span
                        class="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                      >
                        ↗
                      </span>
                    </a>
                    <span
                      class="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                    >
                      <a
                        :href="item.projectlink"
                      >
                        <i class="fab fa-github"></i>
                      </a>
                    </span>
                  </h3>
                  <p class="leading-normal text-md text-gray-550">
                    {{item.projectyears}} | {{item.projectroll}}
                  </p>
                </header>
                <p class="mt-2.1 text-md text-gray-700 leading-normal">
                  {{item.projectdesciption}}
                </p>
              </section>
            </div>

            <div class="break-inside-avoid">
              <!-- To keep in the same column -->
              <h2
                class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
              >
                {{ t('archief') }}
              </h2>
              <!--Project 1 --------------------------------------------------------------------------------------------------------->
              <section v-for="item in archive" :key="item" class="pb-2 mb-2 border-b-2 break-inside-avoid w-1/2 inline-block">
                <header>
                  <h3
                    class="text-lg font-semibold text-gray-700 leading-snugish"
                  >
                    <a
                      class="group"
                    >
                      {{item.projectname}}
                      <span
                        class="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                      >
                        
                      </span>
                    </a>
                    <span
                      class="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                    >
                      <a
                        :href="item.projectlink"
                      >
                        <i class="fab fa-github"></i>
                      </a>
                    </span>
                  </h3>
                  <p class="leading-normal text-md text-gray-550">
                    {{item.projectyears}} | {{item.projectroll}}
                  </p>
                </header>
                <p class="mt-2.1 text-md text-gray-700 leading-normal">
                  {{item.projectdesciption}}
                </p>
              </section>
            </div>


          </section>
</template>
<script setup>



import { useResume } from "~/flamewerk/page";

const resume = useResume();

const projects = resume.$state.projects;

const archive = resume.$state.archive;

const { t } = useI18n({ useScope: "local" });
</script>

<i18n lang="json">
{  
  "en": {    
    "archief": "ARCHIVE",
    "projects": "PROJECTS" 
  },
  "da": {
    "archief": "ARKIV",
    "projects": "PROJEKTER"
  },
  "de": {
    "archief": "ARCHIV",
    "projects": "PROJEKTE"
  },
  "es": {
    "archief": "ARCHIVO",
    "projects": "PROYECTOS"
  },
  "nl": {
    "archief": "ARCHIEF",
    "projects": "PROJECTEN"
  },
  "fr": {
    "archief": "ARCHIVES",
    "projects": "PROJETS"
  }
}
</i18n>