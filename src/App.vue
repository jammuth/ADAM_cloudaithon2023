<template>
  <div class="flex min-h-full flex-col">
    <HeaderNav />
    <router-view></router-view>
  </div>
</template>

<script setup>
import HeaderNav from '@/components/HeaderNav.vue';
</script>
