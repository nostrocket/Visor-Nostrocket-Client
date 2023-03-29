<template>
                  <NuxtLink

                :to="localePath('/dashboard')"
                class="
                  flex
                  w-full
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
                  bg-colorBtnLight
                  dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark
                  hover:bg-colorBtnHoverLight
                  max-w-md
                  mx-auto
                  mt-6
                "
                >Click here to go to the App Dashboard</NuxtLink
              >
</template>

