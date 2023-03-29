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
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>





        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Sign in to your account</h2>

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

        <div class="flex items-center justify-between">


          <div class="text-sm">
            <p class="inline dark:text-white">You lost your password? </p>
            <NuxtLink :to="localePath('/reset')" class="font-medium text-colorBtnLight dark:text-colorBtnDark underline hover:text-indigo-500">Get it back</NuxtLink>
          </div>

          <div class="flex ">
          <NuxtLink :to="localePath('/dashboard')" class="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white 
          
                         bg-colorBtnLight hover:bg-colorBtnHoverLight
                dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark 
          
          ">

            Sign in
          </NuxtLink>
          </div>


        </div>


      </form>


        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="bg-colorBgLight dark:bg-colorBgDark px-2 dark:text-white">Or create a new account</span>
            </div>
          </div>

          <div class="mt-6 ">



            <NuxtLink
              
              :to="localePath('/register')"
              class="

                inline-flex
                items-center
                justify-center
                rounded-md
                border border-transparent
                px-4
                py-2
                text-base
                font-medium
                text-white
                shadow-sm
                bg-colorBtnLight hover:bg-colorBtnHoverLight
                dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark
                w-full
              "
              >Create New Account</NuxtLink
            >


          </div>
        </div>



    </div>
  </div>
</template>

<script setup>
import { LockClosedIcon } from '@heroicons/vue/20/solid'


import { EnvelopeIcon } from '@heroicons/vue/20/solid'

</script>