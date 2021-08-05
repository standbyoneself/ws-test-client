<template>
  <base-layout>
    <router-view />
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseLayout from '@/components/BaseLayout.vue';

export default defineComponent({
  name: 'App',
  components: { BaseLayout },
});
</script>
