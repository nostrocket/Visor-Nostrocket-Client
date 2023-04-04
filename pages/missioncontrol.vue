<template>
    <main class="max-w-4xl mx-auto">


<h1 class="text-2xl dark:text-white mt-6 block">🤯 List of totally normal things;</h1>

<ul class="dark:text-white mb-6">
  <li>- During testing things that might help: Hard refresh after the double key request
  </li>
    <li>- For now the request for the key readout happens twice ( this is "normal" for now)
  </li>
  <li>- Performance duhh 
  </li>
  <li>- Events readout is still broken 
  </li>
  <li>- Profile Readout does work 🥳
  </li>

</ul>
<a href="#" class="text-2xl dark:text-white mt-6" onclick="document.getElementById('content').replaceChildren(updateAccountDetails())"> 🎚️ Toggle Events / Account</a>


<div id="content" class="dark:text-white mt-12">
    WAITING FOR EVENTS

</div>
</main>
</template>
<script setup>

// import {nostrTools, getPublicKey} from 'nostr-tools'

setPageLayout('landing');


useHead({
  meta: [
    { property: "twitter:title", content: "Flamewerk: Nuxt3 Startup Theme" },
    { property: "twitter:image", content: "/Thumbnail.png" },
    {
      property: "twitter:description",
      content:
        "Build Modern Webapps for Free Forever with one easy config, Deploy in less then 5min on any cloudprovider. Create a website, application, shop or community with super documentation and our community.",
    },
  ],
  script: [

        { src: "https://unpkg.com/nostr-tools/lib/nostr.bundle.js" },

    { src: "/libs/updateProfile.js"},
   { src: "/libs/kind0.js" },
   { src: "/libs/pubkey.js" },
   { src: "/libs/showdown.min.js" },
   { src: "/libs/state.js" },
   { src: "/libs/utils.js"},

    // { src: "/libs/events.js", body:false},


  ],

});
</script>
<style>
.dark input[type=text]
 {
    color: black;
 }

.dark textarea {
 
    color: black;
 }

    </style>