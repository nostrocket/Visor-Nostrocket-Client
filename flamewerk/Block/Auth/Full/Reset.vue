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
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>




        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Retrieve your password</h2>

      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
  <div>
    <!-- <label for="email" class="block text-sm font-medium text-gray-700">Email</label> -->
    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <EnvelopeIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 mb-6" placeholder="Email" />
    </div>
  </div>







        </div>

        <div class="flex items-center justify-between">


          <div class="text-sm">
            <p class="inline dark:text-white">Don't have a account? </p>
            <NuxtLink :to="localePath('/login')" class="font-medium text-colorBtnLight dark:text-colorBtnDark underline hover:text-indigo-500">Create a new account</NuxtLink>
          </div>

          <div class="flex ">
          <NuxtLink :to="localePath('/newpass')" class="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white 
          
                         bg-colorBtnLight hover:bg-colorBtnHoverLight
                dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark 
          
          ">

            Send
          </NuxtLink>
          </div>


        </div>


      </form>






    </div>
  </div>
</template>

<script setup>
import { LockClosedIcon } from '@heroicons/vue/20/solid'


import { EnvelopeIcon } from '@heroicons/vue/20/solid'

</script>