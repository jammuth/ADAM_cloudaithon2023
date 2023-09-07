<template>
  <div class="flex min-h-full flex-col">
    <HeaderNav />
    <div class="mx-auto w-full h-full max-w-7xl flex justify-stretch">
      <div class="flex grow border border-gray-200 px-4 py-6">
        <SideBarV2 />
      </div>
      <div class="flex grow border border-gray-200 px-4 py-6">
        <ObjectView />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderNav from '@/components/HeaderNav.vue';
import SideBarV2 from '@/components/SideBarV2.vue';
import ObjectView from '@/components/ObjectView.vue';
</script>
