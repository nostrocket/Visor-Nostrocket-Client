<template>
    <div class="dark:text-white my-12">


<button @click="onSubmit" type="button" class="inline-flex justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2">
                  SET A SINGLE VALUE IN THE PINIA STORE
                </button>

    </div>
</template>

<script setup>
import { useNostr } from "~/flamewerk/nostr";

const nostrkeys = useNostr();

const onSubmit = () => {
    nostrkeys.nostr.sk = 'Updated Value';
}



</script>