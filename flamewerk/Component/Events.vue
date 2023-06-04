<template>
    <main class="max-w-4xl mx-auto">

 {{nostrResult.mirvs}}
            <!-- <div v-for="item in nostrResult.identity" :key="item" class="basis-1/2 md:basis-full mt-24">
    {{item}}

</div> -->
</main>
</template>
<script setup>

import {SimplePool} from 'nostr-tools'

const nostrResult = ref('')

const pool = new SimplePool()
let relays = []
let sub = pool.sub(
    [...relays, 'wss://nostr.688.org'],
    [
        {
            "#e": "fd459ea06157e30cfb87f7062ee3014bc143ecda072dd92ee6ea4315a6d2df1c",
            kinds: [10310]

        }
    ]
)
sub.on('event', event => {
    nostrResult.value = JSON.parse(event.content)
    // console.log(nostrResult)
    console.log(nostrResult.value.identity)
// identity
// mirvs
// problems
// shares
})

</script>
