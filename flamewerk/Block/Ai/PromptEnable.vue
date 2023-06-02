<template>
          <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg my-12">
            <SwitchGroup as="div" class="px-4 py-5 sm:p-6">
              <SwitchLabel
                as="h3"
                class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
                passive
                >Renew subscription automatically</SwitchLabel
              >
              <div class="mt-2 sm:flex sm:items-start sm:justify-between">
                <div class="max-w-xl text-sm text-gray-500 dark:text-white">
                  <SwitchDescription
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo totam non cumque deserunt officiis ex maiores
                    nostrum.</SwitchDescription
                  >
                </div>
                <div
                  class="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center"
                >
                  <Switch
                    v-model="enabled"
                    :class="[
                      enabled ? 'bg-indigo-600' : 'bg-gray-200',
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2',
                    ]"
                  >
                    <span
                      aria-hidden="true"
                      :class="[
                        enabled ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                      ]"
                    />
                  </Switch>
                </div>
              </div>
            </SwitchGroup>
          </div>
</template>

<script setup>
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
  MicrophoneIcon,
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
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
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

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  {
    name: "Tasks",
    href: "/tasks",
    icon: ChatBubbleBottomCenterTextIcon,
    current: false,
  },

  { name: "Sceduale", href: "/sceduale", icon: CalendarIcon, current: false },
  { name: "Labeled", href: "/recurring", icon: TagIcon, current: false },

  { name: "envelope", href: "/mail", icon: EnvelopeIcon, current: false },
  { name: "writer", href: "/writer", icon: DocumentTextIcon, current: false },
  { name: "coder", href: "/coder", icon: CommandLineIcon, current: false },

  {
    name: "sandbox",
    href: "/sandbox",
    icon: CubeTransparentIcon,
    current: false,
  },

  { name: "Folder", href: "/folder", icon: FolderIcon, current: false },
];
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

