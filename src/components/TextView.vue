<template>
  <div class="flex flex-col">
    <label for="preview">Object Preview</label>
    <div class="flex py-1">
      <input name="lang[]" id="json" class="mx-2 px-2" type="radio" /><label
        for="json"
        >JSON</label
      >
      <input
        name="lang[]"
        id="yaml"
        class="mx-2 px-2"
        type="radio"
        disabled
      /><label for="yaml">YAML</label>
      <input
        class="mx-2 px-2"
        name="prettyme"
        id="pretty"
        type="checkbox"
        v-on:change="isPretty = !isPretty"
        checked="true"
      /><label for="prettyme">Pretty</label>
    </div>
    <textarea readonly class="h-max" name="preview" id="preview" rows="50">{{
      JSON.stringify(appStore.assetDefinition, null, isPretty ? 4 : null)
    }}</textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAppStore } from '@/stores/AppStore';
const appStore = useAppStore();
let isPretty = ref(true);
</script>
