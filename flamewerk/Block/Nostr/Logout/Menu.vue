<template>
    <button
      type="button"
      @click="onSubmit"
      class="block px-3 py-1 text-sm leading-6 text-gray-900"
    ><ArrowLeftOnRectangleIcon class="h-6 w-6 shrink-0 inline" />
Logout
    </button>








</template>

<script setup>
import {  ArrowLeftOnRectangleIcon
} from "@heroicons/vue/24/outline";

import { useNostr } from "~/flamewerk/nostr";

const nostrkeys = useNostr();

const onSubmit = (e) => {
    nostrkeys.nostr.sk = '';
    nostrkeys.nostr.pk = '';
    nostrkeys.nostr.skhex = '';
    nostrkeys.nostr.pkhex = '';
}


</script>