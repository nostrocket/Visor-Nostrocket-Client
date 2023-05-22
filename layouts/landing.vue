<template>
<div>
<div class="back">
    <main class="scene">

    </main>






</div>

  <div class=" min-h-screen absolute w-full z-50 top-0">
    <BlockHeaderTiny v-if="project.$state.headertype == 'Tiny'" />
    <BlockHeaderMinimal v-if="project.$state.headertype == 'Minimal'" />
    <BlockHeaderMaximum v-if="project.$state.headertype == 'Maximum'" />
    <BlockHeaderEcommerce v-if="project.$state.headertype == 'Ecommerce'" />
    <div class=" pt-24">
      <slot />
    </div>
    <BlockFooterTiny v-if="project.$state.footertype == 'Tiny'" />
    <BlockFooterMinimal v-if="project.$state.footertype == 'Minimal'" />
     <BlockFooterEcommerce v-if="project.$state.footertype == 'Ecommerce'" />
    <BlockFooterMaximum v-if="project.$state.footertype == 'Maximum'" />
  </div>

  </div>




</template>
<script setup>
import { useSettings } from "~/flamewerk/project";
const project = useSettings();

<script/>