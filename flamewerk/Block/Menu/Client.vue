<template>
    <div>

    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>

              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-gray-900 px-6 pb-2 ring-1 ring-white/10"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <!-- <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> -->


            <img
              v-if="project.$state.logo"
              :class="[project.$state.logodark ? 'block dark:hidden' : '', '']"
              class="h-8 w-auto"
              :src="'/logo/' + project.$state.logoimage"
              :alt="project.$state.name"
              width="40"
              height="40"
            />
            <img
              v-if="project.$state.logodark"
              class="hidden dark:block h-8 w-auto"
              :src="'/logo/' + project.$state.logodarkimage"
              :alt="project.$state.name"
              width="40"
              height="40"
            />





                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="-mx-2 flex-1 space-y-1">

                    <li v-if="project.$state.nostrlogin">
                      <BlockNostrLoginMobile  />
                    </li>

          <li v-if="project.$state.nostrregister">
            <BlockPopupNostrMobile  />
          </li>

                    <li v-for="item in navigation.basicmenu" :key="item.name">
                      <NuxtLink
                        :to="localePath(item.href)"
                        :class="[
                          item.current
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                        ]"
                      >
                        <component
                          :is="item.heroicon"
                          class="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {{ item.name }}
                      </NuxtLink>
                    </li>

                  </ul>

        <BlockSwitchTheme class="mb-12" />

        <BlockPopupLanguage />



                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>


    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:pb-4 bg-white/20 dark:bg-black/20 backdrop-blur-sm bg-opacity-[50%]"
    >
      <div class="flex h-16 shrink-0 items-center justify-center">
        <!-- <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        /> -->

            <img
              v-if="project.$state.logo"
              :class="[project.$state.logodark ? 'block dark:hidden' : '', '']"
              class="h-8 w-auto"
              :src="'/logo/' + project.$state.logoimage"
              :alt="project.$state.name"
              width="40"
              height="40"
            />
            <img
              v-if="project.$state.logodark"
              class="hidden dark:block h-8 w-auto"
              :src="'/logo/' + project.$state.logodarkimage"
              :alt="project.$state.name"
              width="40"
              height="40"
            />





      </div>
      <nav class="mt-8">
        <ul role="list" class="flex flex-col items-center space-y-1">

                    <li v-if="project.$state.nostrlogin">
                      <BlockNostrLoginStart  />
                    </li>

          <li v-if="project.$state.nostrregister">
            <BlockPopupNostrRegister  />
          </li>




          <li v-for="item in navigation.basicmenu" :key="item.name">
            <NuxtLink
              :to="localePath(item.href)"
              :class="[
                item.current
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800',
                'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold',
              ]"
            >
              <component
                :is="item.heroicon"
                class="h-6 w-6 shrink-0"
                aria-hidden="true"
              />
              <span class="sr-only">{{ item.name }}</span>
            </NuxtLink>
          </li>

          <li v-if="project.$state.nostrlogin">
            <BlockNostrLogoutButton  />
          </li>


        </ul>
        <BlockSwitchThemeSimple class="mb-12" />

        <BlockPopupLanguage />
        <BlockNostrIdentityCall v-if="project.$state.nostr" />
      </nav>
    </div>



      <div
        class="fixed w-full top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 dark:text-white bg-white/20 dark:bg-black/20 backdrop-blur-sm bg-opacity-[50%]"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden dark:text-white"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div class="relative flex flex-1"></div>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <Menu as="div" class="relative">

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                >
                  <MenuItem
                    v-for="item in UserMicrophone"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <NuxtLink
                      :to="item.href"
                      :class="[
                        active ? 'bg-gray-50' : '',
                        'block px-3 py-1 text-sm leading-6 text-gray-900',
                      ]"
                      >{{ item.name }}</NuxtLink
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>

            <!-- Separator -->
            <div
              class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
              aria-hidden="true"
            />
            <BlockNostrQueryProfileHeader />

          </div>
        </div>
      </div>


    </div>
</template>
<script setup>

import { useSettings } from "~/flamewerk/project";

const project = useSettings();

const navigation = project.$state.Headernavigation;

import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  CommandLineIcon,
  PaperClipIcon,
  TagIcon,
  UserCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  Cog8ToothIcon,
  KeyIcon
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
  
} from "@heroicons/vue/20/solid";
import {
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";

// const navigation = [
//   { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
//   {
//     name: "Tasks",
//     href: "/tasks",
//     icon: ChatBubbleBottomCenterTextIcon,
//     current: false,
//   },

//   { name: "Sceduale", href: "/sceduale", icon: CalendarIcon, current: false },
//   { name: "Labeled", href: "/recurring", icon: TagIcon, current: false },

//   { name: "envelope", href: "/mail", icon: EnvelopeIcon, current: false },
//   { name: "writer", href: "/writer", icon: DocumentTextIcon, current: false },
//   { name: "coder", href: "/coder", icon: CommandLineIcon, current: false },


//   {
//     name: "sandbox",
//     href: "/sandbox",
//     icon: CubeTransparentIcon,
//     current: false,
//   },

//   { name: "Folder", href: "/folder", icon: FolderIcon, current: false },

//   { name: "settings", href: "/settings", icon: Cog8ToothIcon, current: false },



// ];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
const UserMicrophone = [
  { name: "Always On", href: "#" },
  { name: "Activation Phrase", href: "#" },
  { name: "Disabled", href: "#" },
];

const timeline = [
  {
    id: 1,
    content: "Applied to",
    target: "Front End Developer",
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    icon: UserIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "Advanced to phone screening by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    icon: HandThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "Completed phone screening with",
    target: "Martha Gardner",
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 4,
    content: "Advanced to interview by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 30",
    datetime: "2020-09-30",
    icon: HandThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 5,
    content: "Completed interview with",
    target: "Katherine Snyder",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
];

const assignees = [
  { name: "Unassigned", value: null },
  {
    name: "Wade Cooper",
    value: "wade-cooper",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More items...
];
const labels = [
  { name: "Unlabelled", value: null },
  { name: "Engineering", value: "engineering" },
  // More items...
];
const dueDates = [
  { name: "No due date", value: null },
  { name: "Today", value: "today" },
  // More items...
];

const assigned = ref(assignees[0]);
const labelled = ref(labels[0]);
const dated = ref(dueDates[0]);

const sidebarOpen = ref(false);
const enabled = ref(false);
</script>