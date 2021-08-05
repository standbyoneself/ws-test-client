<template>
  <div class="auth">
    <app-description />
    <base-anchor
      text="Sign In"
      :href="`https://github.com/login/oauth/authorize?client_id=${clientId}`"
    />
    <cookie-modal />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/runtime-core';
import AppDescription from '@/components/AppDescription.vue';
import BaseAnchor from '@/components/BaseAnchor.vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
import { GITHUB_CLIENT_ID as clientId } from '@/constants';
import CookieModal from '@/components/CookieModal.vue';

export default defineComponent({
  name: 'Auth',
  components: {
    AppDescription,
    BaseAnchor,
    CookieModal,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    onMounted(() => {
      if (store.state.isAuthenticated === true) {
        router.replace({ name: 'Home' });
      }
    });

    return { clientId };
  },
});
</script>

<style scoped>
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
