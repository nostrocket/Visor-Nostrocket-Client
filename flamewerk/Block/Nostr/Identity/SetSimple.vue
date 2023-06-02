<template>
    <div class="dark:text-white my-12">


<button @click="onSubmit" type="button" class="inline-flex justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2">
                  Set A Key In the SK Store
                </button>

    </div>
</template>

<script setup>
import { useNostr } from "~/flamewerk/nostr";

const nostrkeys = useNostr();

const onSubmit = () => {
    nostrkeys.nostr.sk = 'Just A Test';

    nostrkeys.nostr.pkhex = 'c8383d81dd24406745b68409be40d6721c301029464067fcc50a25ddf9139549';




    
}



</script>