<template>
            <!-- Name ---------------------------------------------------------------------------------------------------->
        <header
          class="inline-flex justify-between w-full mb-3 align-top border-b-8"
        >
          <div class="inline-block">
            <h1 class="mb-0 text-5xl font-bold text-gray-750">
              {{person.name}}
            </h1>
            <!--Job Title--------------------------------------------------------------------------------------------------------->
            <h2
              class="m-0 text-2xl font-semibold text-gray-700 leading-snugish"
            >
              {{person.title}}
            </h2>
            <!--Location --------------------------------------------------------------------------------------------------------->

            <h3
              class="m-0 mt-2 font-semibold text-md text-gray-550 leading-snugish"
            >{{person.location}}
            </h3>
          </div>

          <div
            class=" text-3xl font-bold leading-none text-gray-200 initials-container bg-gray-750 print:bg-black"
          >
            <!-- <div class="text-center initial">T</div>
            <div class="text-center initial">L</div>
            <div class="text-center initial">H</div> -->

  <span class=" inline-block initial">
    <img class="h-24 w-24 rounded-full" :src="person.image" alt="" />

  </span>



          </div>


        </header>
</template>
<script setup>

import { useResume } from "~/flamewerk/page";

const resume = useResume();

const person = resume.$state.person;

</script>