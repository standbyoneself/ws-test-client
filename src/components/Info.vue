<template>
  <div class="info">
    <p class="info__name">
      Created by
      <animated-anchor
        text="Sergey Vishnevsky"
        href="https://github.com/standbyoneself"
      />
    </p>
    <div>
      <p class="info__code">Source code:</p>
      <animated-anchor
        text="ws-test-client"
        href="https://github.com/standbyoneself/ws-test-client"
      />
      |
      <animated-anchor
        text="ws-test-server"
        href="https://github.com/standbyoneself/ws-test-server"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import AnimatedAnchor from '@/components/AnimatedAnchor.vue';

export default defineComponent({
  components: { AnimatedAnchor },
  name: 'Info',
});
</script>

<style scoped>
.info {
  margin-top: 40px;
  text-align: center;
}

.info__name {
  margin-bottom: 4px;
}

.info__code {
  margin-bottom: 2px;
}
</style>
