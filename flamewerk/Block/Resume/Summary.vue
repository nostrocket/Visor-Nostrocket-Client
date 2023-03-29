<template>
    
          <!--Summary ---------------------------------------------------------------------------------------------------------->
          <section class="pb-2 pb-4  border-b-4 first:mt-0">
            <!-- To keep in the same column -->
            <div class="break-inside-avoid">
              <h2
                class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
              >
                {{ t('summary') }}
              </h2>

              <section class="mb-2 break-inside-avoid">
                <p class="mt-2 leading-normal text-gray-700 text-md">
                    {{text.summary}}
                </p>
              </section>
            </div>
          </section>
</template>
<script setup>




import { useResume } from "~/flamewerk/page";

const resume = useResume();

const text = resume.$state.text;









const { t } = useI18n({ useScope: "local" });
</script>

<i18n lang="json">
{
  "en": {
    "summary": "SUMMARY"
  },
  "da": {
    "summary": "OPSUMMERING"
  },
  "de": {
    "summary": "ZUSAMMENFASSUNG"
  },
  "es": {
    "summary": "RESUMEN"
  },
  "nl": {
    "summary": "SAMENVATTING"
  },
  "fr": {
    "summary": "RÉSUMÉ"
  }
}
</i18n>
