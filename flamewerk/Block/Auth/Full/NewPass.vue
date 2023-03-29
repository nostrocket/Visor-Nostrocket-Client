<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>





<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="h-20 w-20 mx-auto dark:text-white mb-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
</svg>



        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Set a new password</h2>

      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">




  <div>
    <!-- <label for="email" class="block text-sm font-medium text-gray-700">Email</label> -->
    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <LockClosedIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input id="password" name="password" type="password" autocomplete="current-password" class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 mb-2" placeholder="Password" />
    </div>
  </div>



        </div>




          <div class="flex ">
          <NuxtLink :to="localePath('/dashboard')" class="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white 
          
                         bg-colorBtnLight hover:bg-colorBtnHoverLight
                dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark 
          
          ">

            Submit new password
          </NuxtLink>
          </div>




      </form>






    </div>
  </div>
</template>

<script setup>
import { LockClosedIcon } from '@heroicons/vue/20/solid'


import { EnvelopeIcon } from '@heroicons/vue/20/solid'

</script>