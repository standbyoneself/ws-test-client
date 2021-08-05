<template>
  <a
    class="base-anchor"
    :style="{
      backgroundColor: bg,
      color,
    }"
    :href="href"
  >
    {{ text }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'BaseAnchor',
  props: {
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      default: '',
    },
    bg: {
      type: String,
      default: '#f44336',
    },
    color: {
      type: String,
      default: '#fff',
    },
  },
});
</script>

<style scoped>
.base-anchor {
  outline: none;
  border: none;
  padding: 10px 50px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-family: inherit;
  text-decoration: none;
}
</style>
