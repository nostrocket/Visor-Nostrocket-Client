<template>


<footer class="backdrop-blur-sm bg-opacity-[50%] border-t border-gray-700" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div class="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
      <div class="col-span-4">
          <div class="flex flex-row flex-wrap md:flex-nowrap">


            <div v-for="item in navigation" :key="item.id" class="basis-1/2 md:basis-full">

              <ul role="list" class="mt-4 space-y-4 text-center xl:text-left">
                <li v-for="itemlink in item" :key="itemlink.name">
                  <NuxtLink
                    :to="localePath(itemlink.href)"
                    class="text-base text-gray-500 hover:text-colorTxtLight dark:text-colorTxtDark"
                    >{{ itemlink.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
        </div>
      </div>
      <div class="mt-12 xl:mt-0">

        <div class="mt-4 xl:max-w-xs">
          <div class="w-full flex items-center">
          <BlockSwitchLanguage v-if="project.$state.footerlanguage" class="mx-auto"/>
          <BlockSwitchTheme v-if="project.$state.footertheme" class="mx-auto"/>
            <BlockSwitchCurrency />
            


            <!-- <currency-switch /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-700 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0" v-if="project.$state.footernewsletter">
      <div>
        <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 tracking-wider uppercase">Sign up for newsletter</h3>
        <p class="mt-2 text-base text-gray-800 dark:text-gray-200">Signup for the monthly newsletter and never miss any updates !</p>
      </div>
      <form class="mt-4 sm:flex sm:max-w-md lg:mt-0">
        <label for="email-address" class="sr-only">Email address</label>
        <input type="email" name="email-address" id="email-address" autocomplete="email" required class="appearance-none min-w-0 w-full bg-white border border-black rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs" placeholder="Enter your email">
        <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button type="submit" class="w-full bg-indigo-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">{{ $t('footer.subscribebutton') }}</button>
        </div>
      </form>
    </div>
    <div class="">
      <BlockSocialsSmall  v-if="project.$state.footersocials"/>
      <BlockFooterCopyright />
   
   
    </div>
  </div>
</footer>































  
</template>

<script setup>
import { useSettings } from "~/flamewerk/project";

const project = useSettings();

const navigation = project.$state.Footernavigation.FooterColums;

</script>
