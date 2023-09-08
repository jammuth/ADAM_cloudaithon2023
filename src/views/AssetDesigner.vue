<template>
  <div class="mx-auto w-full h-full max-w-7xl flex justify-stretch">
    <div class="flex grow border border-grey-200 px-4 py-6"><SideBarV2 /></div>
    <div class="flex grow border border-grey-200 px-4 py-6"><ObjectView /></div>
  </div>
</template>

<script setup>
import SideBarV2 from '@/components/SideBarV2.vue';
import ObjectView from '@/components/ObjectView.vue';
</script>
