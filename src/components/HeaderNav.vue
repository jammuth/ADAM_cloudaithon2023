<template>
  <div>
    <header class="shrink-0 bg-gray-900 text-white">
      <div
        class="flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-18"
      >
        <div class="text-xl">ADAM</div>
        
        <div><router-link to="/entity_designer">Asset Designer</router-link></div>
        <div><router-link to="/asset_models">Asset Modeling</router-link></div>

        <div class="text-4xl text-right">🌱</div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/AppStore';

const appStore = useAppStore();
const saveToBlob = () => {
  
};
</script>
