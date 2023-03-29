<template>
  <main>
    <!-- FIND IF DOCUMENT EXIST IN CONTENT LANG FOLDER ( example /da/news )-->
    <ContentDoc>
      <template #empty>
        <BlockErrorEmpty />
      </template>
      <!-- FIND IF DOCUMENT EXIST IN DEFAULT CONTENT LANG FOLDER ( example /default/news )-->
      <template #not-found>
        <ContentDoc :path="slug">
          <!-- REQUESTS ROUTE SLUG FOR DEFAULT LANG FOLDER -->
          <template #empty>
            <BlockErrorEmpty />
          </template>
          <template #not-found>
            <ContentDoc :path="project.$state.dafaultroute">
              <!-- IF THIS DOES NOT EXIST RENDER THE ERROR CONTENT  ( example /error) -->
              <template #not-found>
                <BlockErrorNotFound />
              </template>
            </ContentDoc>
          </template>
        </ContentDoc>
      </template>
    </ContentDoc>
  </main>
</template>

<script setup>
import { useSettings } from "~/flamewerk/project";
const project = useSettings();

setPageLayout(project.$state.layout);

const route = useRoute();

// Rendering the index content const slug = "/";
const slug = ref("/" + route.params.slug);
</script>
