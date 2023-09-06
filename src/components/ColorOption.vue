<template>
  <div class="flex w-fit h-fit shrink">
    <div>
      <svg width="32" height="32">
        <g id="Layer_1">
          <rect
            id="svg_1"
            height="31"
            width="31"
            y="1"
            x="1"
            :fill="props.fillcolor"
          />
        </g>
      </svg>
    </div>
    <p>{{ props.fillcolor }}</p>
  </div>
</template>

<script setup>
const props = defineProps({ fillcolor: String });
</script>
