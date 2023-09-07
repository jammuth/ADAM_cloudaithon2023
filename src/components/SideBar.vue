<template>
  <div class="pt-12 flex flex-col gap-x-8">
    Metadata:
    <div class="flex flex-col m-2 p-2">
    <div class="py-2 flex justify-between align-middle text-center">
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Declaring Element
            <ChevronDownIcon
              class="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </MenuButton>
        </div>
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="absolute right-0 z-10 mt-2 w-56 flex-wrap origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div v-for="(option, optionIdx) in styles" :key="optionIdx">
              <MenuItem v-slot="{ active }">
                <a
                  v-on:click="selectStyle(option)"
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                >
                  <p>{{ option.value }}</p>
                </a>
              </MenuItem>
            </div>
          </MenuItems></transition
        >
      </Menu>
      <p >{{ assetDefinition.metadata.type }}</p>
    </div>
    <div class="py-1">
      <div class="relative ">
        <label
          for="name"
          class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >Name</label
        >
        <input
          v-model="assetDefinition.metadata.name"
          type="text"
          name="name"
          id="name"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="folder A"
        />
      </div></div>
      <div class="py-1">
      <div class="relative">
        <label
          for="name"
          class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >Title</label
        >
        <input
          v-model="assetDefinition.metadata.title"
          type="text"
          name="name"
          id="name"
          class="block w-full rounded-md border-0 my-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="folder A"
        />
      </div></div>

      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Background Color
            <ChevronDownIcon
              class="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="absolute right-0 z-10 mt-2 w-56 flex-wrap origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <MenuItem v-slot="{ active }">
              <a
                v-on:click="removeBGColor()"
                href="#"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                ]"
              >
                Remove Background Color
              </a>
            </MenuItem>
            <div
              class="py-1"
              v-for="(color, colorIdx) in colors"
              :key="colorIdx"
            >
              <MenuItem v-slot="{ active }">
                <a
                  v-on:click="setBGColor(color)"
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                >
                  <ColorOption :fillcolor="color.value" />
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/AppStore';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import ColorOption from '@/components/ColorOption.vue';
const appStore = useAppStore();
const assetDefinition = appStore.assetDefinition;

const selectStyle = (selected) => {
  assetDefinition.metadata.type = selected.value;
};

const styles = [
  { value: 'folder', label: 'Folder', default: true },
  { value: 'database', label: 'Database' },
  { value: 'cloud', label: 'Cloud' },
  { value: 'storage', label: 'Storage' },
  { value: 'node', label: 'Node' },
  { value: 'stack', label: 'Stack' },
];

selectStyle(styles[0]);
const colors = [
  {
    value: '#08e89e',
    label: '#08e89e',
    full_class: 'w-full h-full bg-[#08e89e]',
  },
  {
    value: '#44a546',
    label: '#44a546',
    full_class: 'w-full h-full bg-[#44a546]',
  },
  {
    value: '#531df1',
    label: '#531df1',
    full_class: 'w-full h-full bg-[#531df1]',
  },
  {
    value: '#a7fda7',
    label: '#a7fda7',
    full_class: 'w-full h-full bg-[#a7fda7]',
  },
  {
    value: '#93ecf8',
    label: '#93ecf8',
    full_class: 'w-full h-full bg-[#93ecf8]',
  },
  {
    value: '#79ffe1',
    label: '#79ffe1',
    full_class: 'w-full h-full bg-[#79ffe1]',
  },
  {
    value: '#093ff7',
    label: '#093ff7',
    full_class: 'w-full h-full bg-[#093ff7]',
  },
  {
    value: '#a85759',
    label: '#a85759',
    full_class: 'w-full h-full bg-[#a85759]',
  },
  {
    value: '#52de31',
    label: '#52de31',
    full_class: 'w-full h-full bg-[#52de31]',
  },
];

let backgroundimageclass = 'w-full h-full';

const setBGColor = (color) => {
  appStore.assetDefinition.metadata.color = color.value;
  appStore.currentColor = color;
};

const removeBGColor = () => {
  if (appStore.assetDefinition.metadata.color !== undefined)
    delete appStore.assetDefinition.metadata.color;
  appStore.currentColor = { full_class: 'w-full h-full' };
};
</script>
