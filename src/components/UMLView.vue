<template>
  <div>
    <h1>UML View</h1>
  </div>
  <div class="relative">
    <img
      id="background_image"
      :src="`/${appStore.assetDefinition.metadata.type}.svg`"
      alt=""
      :class="currentColor.full_class"
      :key="componentKey"
    />
    <div class="absolute top-10 left-10 text-center">
      <div v-for="section in appStore.assetDefinition.sections">
        <div class="font-bold">{{ section.name }}</div>
        <div v-for="(item, key) in section.data">
          <p>
            <span class="font-bold">{{ key + ': ' }}</span
            >{{ item }}
          </p>
        </div>
      </div>
    </div>
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

const backgroundImageClass = storeToRefs(
  `w-full h-full bg-[url(${appStore.assetDefinition.metadata.type}.svg)]`
);

watch(currentColor, () => {
  forceRerender();
});
</script>
