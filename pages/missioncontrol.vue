<template>
    <main class="max-w-4xl mx-auto">


<h1 class="text-2xl dark:text-white mt-6 block">🤯 List of totally normal things;</h1>

<ul class="dark:text-white mb-6">
  <li>- Performance is still a bit derpy  
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

setPageLayout('landingclone');


useHead({
  meta: [
    { property: "twitter:title", content: "VISØR: Nostrocket Client" },
    { property: "twitter:image", content: "/Thumbnail.png" },
    {
      property: "twitter:description",
      content:
        "VISØR: Nostrocket Client",
    },
  ],
  script: [

        { src: "/libs/nostr.bundle.js" },

    { src: "/libs/updateProfile.js"},
   { src: "/libs/kind0.js" },
   { src: "/libs/pubkey.js" },
   { src: "/libs/showdown.min.js" },
   { src: "/libs/state.js" },
   { src: "/libs/utils.js"},

    { src: "/libs/events.js", body:false},


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