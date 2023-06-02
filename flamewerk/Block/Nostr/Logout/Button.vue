<template>
    <button
      type="button"
      @click="onSubmit"
      class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold"
    ><ArrowLeftOnRectangleIcon class="h-6 w-6 shrink-0" />

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