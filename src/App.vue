<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div class="flex min-h-full flex-col">
    <HeaderNav />
    <div class="mx-auto w-full h-full max-w-7xl flex justify-stretch">
      <div class="w-64 border border-gray-200 px-4 py-6">
        <SideBar />
      </div>
      <div class="flex-auto border border-gray-200 px-4 py-6">
        <UMLView />
      </div>
      <div class="flex-1 border border-gray-200 px-4 py-6">
        <TextView />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderNav from '@/components/HeaderNav.vue';
import SideBar from '@/components/SideBar.vue';
import TextView from '@/components/TextView.vue';
import UMLView from '@/components/UMLView.vue';
import { useAppStore } from '@/stores/AppStore';
useAppStore();
</script>
