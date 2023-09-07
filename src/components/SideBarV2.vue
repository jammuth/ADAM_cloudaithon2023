<template>
  <div class="w-full">
    <h3>Metadata:</h3>
    <div class="flex flex-col mx-3 my-1 py-1">
      <!--asset Name-->
      <div class="py-2">
        <div class="relative">
          <label
            for="name"
            class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >Name</label
          >
          <input
            v-model="appStore.assetDefinition.metadata.name"
            type="text"
            name="name"
            id="name"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="name"
          />
        </div>
      </div>

      <!--asset Title-->
      <div class="py-2">
        <div class="relative">
          <label
            for="name"
            class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >Title</label
          >
          <input
            v-model="appStore.assetDefinition.metadata.title"
            type="text"
            name="name"
            id="name"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            minlength="1"
          />
        </div>
      </div>

      <!--declaritive element UML Style-->
      <div class="py-2">
        <div class="flex flex-col relative">
          <label
            for="umlstyle"
            class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >UML Style</label
          >
          <select
            name="umlstyle"
            id="umlstyle"
            v-model="pickedStyle"
            class="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          >
            <option
              v-for="(option, optionidx) in styles"
              :value="option.value"
              :key="optionidx"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>

      <!--asset Color-->
      <div class="py-2">
        <div class="flex flex-col relative">
          <label for="umlcolors" :class="selectColorclasslabel"
            >Component Color</label
          >
          <select
            name="umlcolors"
            id="umlcolors"
            v-model="pickedColor"
            :class="selectColorclass"
            v-on:change="setBGColor(pickedColor)"
          >
            <option
              v-for="(option, optionidx) in colors"
              :value="option"
              :key="optionidx"
              :class="option.full_class"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <h3>Sections:</h3>
      <button
        class="rounded bg-slate-300 p-1 m-1"
        v-on:click="appStore.addNewSection()"
      >
        Add New Section
      </button>
    </div>
    <div>
      <!--sections-->
      <div :key="rerenderCounter">
        <Disclosure
          as="div"
          v-for="(section, index) in appStore.assetDefinition.sections"
          :key="index"
          v-slot="{ open }"
          class="container border bg-slate-100 rounded p-3 my-2"
        >
          <!--bounding box-->

          <h3 class="-my-3 flow-root">
            <DisclosureButton
              class="flex w-full items-center justify-between bg-slate-100 py-3 text-sm text-gray-400 hover:text-gray-500"
            >
              <span class="font-large font-bold text-gray-900">{{
                section.name
              }}</span>
              <span class="ml-6 flex items-center">
                <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
              </span>
            </DisclosureButton>
          </h3>
          <DisclosurePanel
            as="div"
            class="flex flex-col justify-center items-center"
          >
            <button
              v-on:click="deleteSection(index)"
              type="button"
              class="flex p-2 w-fit justify-center items-center rounded bg-slate-300 hover:bg-slate-400"
            >
              <span class="px-3"> delete:</span
              ><XMarkIcon
                class="h-5 w-5 bg-slate-600 rounded text-white flex justify-self-end"
                aria-hidden="true"
              />
            </button>
            <!--name-->
            <div class="py-2 w-full">
              <div class="relative">
                <label
                  for="name"
                  class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                  >Section Name</label
                >
                <input
                  v-model="section.name"
                  type="text"
                  name="name"
                  id="name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <!--separator-->
            <div class="py-2 w-full">
              <div class="relative">
                <label
                  for="name"
                  class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                  >Section Separator</label
                >
                <select
                  name="sectionsep"
                  id="sectionsep"
                  v-model="section.separator"
                  class="rounded-md w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                >
                  <option
                    v-for="(option, optionidx) in separators"
                    :value="option"
                    :key="optionidx"
                    :class="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
            </div>
            <!--data-->

            <div class="w-full">
              <!--sections-->
              <div :key="rerenderCounter">
                <Disclosure
                  as="div"
                  v-slot="{ open }"
                  class="container border bg-slate-100 rounded p-3 my-2"
                >
                  <!--bounding box-->

                  <h3 class="-my-3 flow-root">
                    <DisclosureButton
                      class="flex w-full items-center justify-between bg-slate-100 py-3 text-sm text-gray-400 hover:text-gray-500"
                      ><h3>Section Data:</h3>

                      <span class="ml-6 flex items-center">
                        <PlusIcon
                          v-if="!open"
                          class="h-5 w-5"
                          aria-hidden="true"
                        />
                        <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel
                    as="div"
                    class="flex flex-col justify-center items-center"
                  >
                    <div
                      v-for="(data, key) in section.data"
                      class="flex w-full justify-between px-1 gap-1"
                    >
                      <span class="flex w-full items-center px-1 gap-1">
                        <p>{{ key }}</p>
                        <p>:</p>
                        <p>"{{ data }}"</p></span
                      >
                      <button>
                        <PencilIcon
                          class="h-5 w-5 p-1 bg-slate-600 rounded text-white flex justify-self-end"
                        />
                      </button>
                      <button v-on:click="appStore.removeData(index, key)">
                        <XMarkIcon
                          class="h-5 w-5 bg-slate-600 rounded text-white flex justify-self-end"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <button
                      class="rounded bg-slate-300 p-1 m-1"
                      v-on:click="appStore.addNewData(index)"
                    >
                      Add New Item
                    </button>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/AppStore';
import { watch, ref } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import {
  MinusIcon,
  PlusIcon,
  XMarkIcon,
  PencilIcon,
} from '@heroicons/vue/20/solid';

const appStore = useAppStore();

const separators = ['solid', 'dotted', 'double', 'none'];

const styles = [
  { value: 'folder', label: 'Folder' },
  { value: 'database', label: 'Database' },
  { value: 'cloud', label: 'Cloud' },
  { value: 'storage', label: 'Storage' },
  { value: 'node', label: 'Node' },
  { value: 'stack', label: 'Stack' },
];

const colors = [
  { value: '', label: 'No Color', full_class: 'w-full h-full' },
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

let pickedStyle = ref('folder');

watch(pickedStyle, () => {
  appStore.assetDefinition.metadata.type = pickedStyle;
});

let pickedColor = ref(colors[0]);
const selectclass =
  'rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600';
let selectColorclass = ref(selectclass);

const selectclasslabel =
  'absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-900 rounded';
let selectColorclasslabel = ref(selectclasslabel);

const setBGColor = (color) => {
  appStore.assetDefinition.metadata.color = color.value;
  appStore.currentColor = color.full_class;

  const updatedclass = selectclass + ' bg-[' + color.value + ']';
  selectColorclass = updatedclass;

  const updatedclasslabel = selectclasslabel + ' bg-[' + color.value + ']';
  selectColorclasslabel = updatedclasslabel;
};

const rerenderCounter = ref(0);

const forceRerender = () => {
  rerenderCounter.value += 1;
};

const deleteSection = (section) => {
  appStore.removeSection(section);
  forceRerender();
};
setBGColor(colors[0]);
</script>
