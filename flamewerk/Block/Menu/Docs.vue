<template>
  <aside
    class="pr-12 w-full max-w-3xl lg:max-w-sm mx-auto lg:mx-0"
    aria-label="Sidebar"
  >
    <div
      class="overflow-y-auto py-4 px-3 bg-white shadow-2xl dark:shadow-gray-800 rounded dark:bg-gray-800 ml-12 pl-12 lg:pl-0"
    >
      <ul
        class="space-y-2 w-72 lg:w-full float-none md:float-left md:pl-3 mx-auto mt-3"
      >
        <li>
          <p
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white font-black"
          >
            🌈
            <span class="underline flex-1 ml-1 whitespace-nowrap"
              >GETTING STARTED</span
            >
          </p>
        </li>

        <li>
          <NuxtLink
            :to="localePath('/docs/start')"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Quick Start </span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            :to="localePath('/docs/prerequisites')"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="flex-1 ml-3 whitespace-nowrap"
              >Software Prerequisites</span
            >
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            :to="localePath('/docs/setup')"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Flamewerk Setup</span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            :to="localePath('/docs/deployment')"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Deployment</span>
          </NuxtLink>
        </li>
      </ul>
      <ul
        class="space-y-2 w-72 lg:w-full float-none md:float-left md:pl-3 mx-auto mt-3"
      >
        <li>
          <p
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white font-black"
          >
            🔥
            <span class="flex-1 underline ml-1 whitespace-nowrap"
              >FLAMEWERK</span
            >
          </p>
        </li>

        <Menu>
          <MenuButton class="w-full">
            <button
              type="button"
              class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <span
                class="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item
                >Development</span
              >
              <svg
                sidebar-toggle-item
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </MenuButton>
          <MenuItems>
            <MenuItem>
              <NuxtLink
                :to="localePath('/docs/project')"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="flex-1 ml-3 whitespace-nowrap"
                  >- Project Config
                </span>
              </NuxtLink>
            </MenuItem>

            <MenuItem>
              <NuxtLink
                :to="localePath('/docs/seo')"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">- SEO</span>
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink
                :to="localePath('/docs/translation')"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="flex-1 ml-3 whitespace-nowrap"
                  >- Translations</span
                >
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink
                :to="localePath('/docs/navigation')"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">- Navigation</span>
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink
                :to="localePath('/docs/layouts')"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">- Layouts</span>
              </NuxtLink>
            </MenuItem>
          </MenuItems>
        </Menu>

        <Menu>
          <MenuButton class="w-full">
            <button
              type="button"
              class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <span
                class="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item
                >Components</span
              >
              <svg
                sidebar-toggle-item
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </MenuButton>
          <MenuItems>
            <MenuItem>
              <NuxtLink
                :to="localePath('/docs/components')"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="flex-1 ml-3 whitespace-nowrap"
                  >- Basic Coding</span
                >
              </NuxtLink>
            </MenuItem>
          </MenuItems>
        </Menu>

        <Menu>
          <MenuButton class="w-full">
            <button
              type="button"
              class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <span
                class="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item
                >Integrations</span
              >
              <svg
                sidebar-toggle-item
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </MenuButton>
          <MenuItems>
            <MenuItem>
              <NuxtLink
                :to="localePath('/docs/ghost-integration')"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">- Ghost</span>
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink
                :to="localePath('/docs/fathom')"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">- Fathom</span>
              </NuxtLink>
            </MenuItem>
          </MenuItems>
        </Menu>

        <li>
          <NuxtLink
            :to="localePath('/docs/demos')"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Demos</span>
          </NuxtLink>
        </li>
      </ul>
      <ul
        class="space-y-2 w-72 lg:w-full float-none md:float-left md:pl-3 mx-auto mt-3"
      >
        <li>
          <p
            class="flex mt-4 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white font-black"
          >
            🧁
            <span class="flex-1 underline ml-1 whitespace-nowrap"
              >DEPLOYMENT</span
            >
          </p>
        </li>
        <li>
          <NuxtLink
            :to="localePath('/docs/deployment')"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Cloudflare</span>
          </NuxtLink>
        </li>
      </ul>
      <ul
        class="space-y-2 w-72 lg:w-full float-none md:float-left md:pl-3 mx-auto mt-3"
      >
        <li>
          <p
            class="flex mt-4 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white font-black"
          >
            🍭
            <span class="flex-1 underline ml-1 whitespace-nowrap"
              >DOCUMENTS</span
            >
          </p>
        </li>
        <li>
          <NuxtLink
            :to="localePath('/docs/manifesto')"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Manifesto</span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            :to="localePath('/docs/contributing')"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Contributing</span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            :to="localePath('/docs/community')"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Community</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>
