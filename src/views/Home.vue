<template>
  <div class="home">
    <user v-if="user" :user="user" />
    <repo-list v-if="repos" :repos="repos" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '@/store';
import User from '@/components/User.vue';
import RepoList from '@/components/RepoList/index.vue';

export default defineComponent({
  components: { User, RepoList },
  name: 'Home',
  setup() {
    const route = useRoute();
    const store = useStore();

    const { code } = route.query;

    onMounted(() => {
      if (store.state.isAuthenticated === false && code !== null) {
        store.dispatch('login', code);
      }
    });

    watchEffect(async () => {
      if (store.state.isAuthenticated === true) {
        await store.dispatch('getUser');
        await store.dispatch('getRepos');
      }
    });

    return {
      user: computed(() => store.state.user),
      repos: computed(() => store.getters.sortedReposByDate),
    };
  },
});
</script>
