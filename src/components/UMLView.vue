<template>
  <div>
    <h1>UML View</h1>
  </div>
  <div>
    <img
      id="background_image"
      :src="`/${appStore.assetDefinition.metadata.type}.svg`"
      alt=""
      :class="currentColor.full_class"
      :key="componentKey"
    />
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

const forceRerender = () => {
  componentKey.value += 1;
};

watch(currentColor, () => {
  forceRerender();
});
</script>
