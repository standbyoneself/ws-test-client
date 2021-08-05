<template>
  <div class="app-description">
    <p class="app-description__text">
      This simple application is intended for displaying GitHub repositories.
    </p>
    <p class="app-description__text">
      It is completely safe since it uses GitHub OAuth and httpOnly cookies
      transferred over HTTPS only.
    </p>
    <p class="app-description__text">You can find source code below!</p>
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'AppDescription',
});
</script>

<style scoped>
.app-description {
  text-align: center;
  max-width: 800px;
  margin-bottom: 40px;
}

.app-description__text {
  line-height: 150%;
  font-size: clamp(18px, 4vw, 24px);
  opacity: 0.35;
}

.app-description__text--default-opacity {
  opacity: 1;
}
</style>
