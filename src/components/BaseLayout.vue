<template>
  <div class="base-layout">
    <slot />
    <info />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import Info from '@/components/Info.vue';

export default defineComponent({
  components: { Info },
  name: 'BaseLayout',
});
</script>

<style scoped>
.base-layout {
  background: linear-gradient(to left, #de6262, #ffb88c);
  color: #fff;
  padding: 20px;
}

@media (max-width: 400px) {
  .base-layout {
    padding: 10px;
  }
}

.base-layout > :first-child {
  min-height: 100vh;
  height: 100%;
}
</style>
