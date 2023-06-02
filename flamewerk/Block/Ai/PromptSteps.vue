<template>
          <div class="flow-root dark:text-white">
            <ul role="list" class="-mb-8">
              <li v-for="(event, eventIdx) in timeline" :key="event.id">
                <div class="relative pb-8">
                  <span
                    v-if="eventIdx !== timeline.length - 1"
                    class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                  <div class="relative flex space-x-3">
                    <div>
                      <span
                        :class="[
                          event.iconBackground,
                          'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
                        ]"
                      >
                        <component
                          :is="event.icon"
                          class="h-5 w-5 text-white dark:text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div
                      class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5"
                    >
                      <div>
                        <p class="text-sm text-gray-500">
                          {{ event.content }}
                          <a
                            :href="event.href"
                            class="font-medium text-gray-900 dark:text-white"
                            >{{ event.target }}</a
                          >
                        </p>
                      </div>
                      <div
                        class="whitespace-nowrap text-right text-sm text-gray-500 dark:text-white"
                      >
                        <time :datetime="event.datetime">{{ event.date }}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
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

