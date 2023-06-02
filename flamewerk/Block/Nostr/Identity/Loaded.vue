<template>
    <div class="dark:text-white my-12">
        <p class="text-xl">SK: {{nostrkeys.nostr.sk}}</p>
        <p class="text-xl">PK: {{nostrkeys.nostr.pk}}</p>
        <p class="text-xl">SKHEX: {{nostrkeys.nostr.skhex}}</p>
        <p class="text-xl">PKHEX: {{nostrkeys.nostr.pkhex}}</p>
    </div>
</template>

<script setup>
import { useNostr } from "~/flamewerk/nostr";

const nostrkeys = useNostr();

</script>