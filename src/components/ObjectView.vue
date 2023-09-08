<template>
  <div class="flex flex-col w-full">
    <label for="preview">Object Preview</label>
    <div class="flex py-1">
      <input
        name="lang[]"
        id="json"
        value="json"
        class="mx-2 px-2"
        type="radio"
        v-model="picked"
      /><label for="json">JSON</label>
      <input
        name="lang[]"
        id="yaml"
        class="mx-2 px-2"
        type="radio"
        value="yml"
        v-model="picked"
      /><label for="yaml">YAML</label>
      <input
        name="lang[]"
        id="pu"
        class="mx-2 px-2"
        type="radio"
        value="uml"
        v-model="picked"
      /><label for="yaml">PlantUML</label>
    </div>
    <textarea
      readonly
      class="h-max"
      name="preview"
      id="preview"
      rows="50"
      v-if="picked == 'json'"
      :key="componentKey"
      >{{ JSON.stringify(appStore.assetDefinition, null, 4) }}</textarea
    >
    <textarea
      readonly
      class="h-max"
      name="preview"
      id="preview"
      rows="50"
      v-if="picked == 'yml'"
      :key="componentKey"
      >{{ asset_as_yml }}</textarea
    >
    <textarea
      readonly
      class="h-max"
      name="preview"
      id="preview"
      rows="50"
      v-if="picked == 'uml'"
      :key="componentKey"
      >{{ asset_as_uml }}</textarea
    >
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import { useAppStore } from '@/stores/AppStore';
const appStore = useAppStore();
const { currentColor } = storeToRefs(appStore);

const componentKey = ref(0);
const picked = ref('json');

const getUML = async () => {
  return await appStore.getUML();
};

const asset_uml = getUML();
let asset_as_uml = ref(asset_uml);

const getYML = async () => {
  return await appStore.getYML();
};

const asset_yml = getYML();
let asset_as_yml = ref(asset_yml);

const forceRerender = () => {
  componentKey.value += 1;
};

watch(currentColor, () => {
  console.log('test color');
  forceRerender();
});

watch(appStore.assetDefinition, async () => {
  console.log('test asset async');
  asset_as_yml = await appStore.getYML();
  asset_as_uml = await appStore.getUML();
  forceRerender();
});
</script>
