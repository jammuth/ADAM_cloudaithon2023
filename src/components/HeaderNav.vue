<template>
  <div>
    <header class="shrink-0 bg-gray-900 text-white">
      <div
        class="flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-18"
      >
        <div class="text-xl">ADAM</div>
        <div><button v-on:click="saveToBlob()">Save Object</button></div>
        <div><button>New Object</button></div>
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
