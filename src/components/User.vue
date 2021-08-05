<template>
  <div class="user">
    <img
      class="user__avatar"
      :src="user.avatar_url"
      data-testid="user-avatar"
    />
    <animated-anchor
      :text="user.login"
      :href="user.html_url"
      class="user__name"
    />
    <img
      :src="logoutIcon"
      class="user__logout-icon"
      @click="logout()"
      data-testid="user-logout-icon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import { GithubUser } from '@/types';
import AnimatedAnchor from './AnimatedAnchor.vue';
import logoutIcon from '@/assets/icons/logout.svg';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';

export default defineComponent({
  components: { AnimatedAnchor },
  name: 'User',
  props: {
    user: {
      type: Object as PropType<GithubUser>,
      required: true,
    },
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    const logout = async () => {
      await store.dispatch('logout');
      router.push({ name: 'Auth' });
    };

    return { logoutIcon, logout };
  },
});
</script>

<style scoped>
.user {
  align-self: flex-end;
  display: flex;
  align-items: center;
}

.user__avatar {
  max-width: 50px;
  border-radius: 50%;
  margin-left: auto;
}

.user__name {
  margin: 0 20px 0 10px;
}

.user__logout-icon {
  width: 20px;
  cursor: pointer;
}
</style>
