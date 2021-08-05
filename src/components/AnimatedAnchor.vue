<template>
  <a class="animated-anchor" :href="href" target="_blank">
    {{ text }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'AnimatedAnchor',
  props: {
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.animated-anchor {
  color: #fff;
}

.animated-anchor::after {
  content: '';
  display: block;
  border-bottom: 1.5px solid #fff;
  width: 0;
  transition: width 0.3s;
}

.animated-anchor:hover::after {
  width: 100%;
}
</style>
