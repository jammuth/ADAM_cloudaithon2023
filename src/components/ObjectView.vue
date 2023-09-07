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
        disabled
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
    <div v-if="picked == 'uml'">
      <img
        id="background_image"
        :src="`/${appStore.assetDefinition.metadata.type}.svg`"
        alt=""
        :class="currentColor"
        :key="componentKey"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import { useAppStore } from '@/stores/AppStore';
const appStore = useAppStore();
const { currentColor, assetDefinition } = storeToRefs(appStore);

const componentKey = ref(0);
const picked = ref('json');

const forceRerender = () => {
  componentKey.value += 1;
};

const backgroundImageClass = storeToRefs(
  `w-full h-full bg-[url(${appStore.assetDefinition.metadata.type}.svg)]`
);

watch(currentColor, () => {
  console.log('test color');
  forceRerender();
});

watch(appStore.assetDefinition, () => {
  console.log('test asset');
  forceRerender();
});
</script>
