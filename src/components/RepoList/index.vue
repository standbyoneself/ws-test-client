<template>
  <div class="repo-list">
    <repo-list-item v-for="repo of repos" :key="repo.id" :repo="repo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import { GithubRepos } from '@/types';
import RepoListItem from '@/components/RepoList/RepoListItem.vue';

export default defineComponent({
  components: { RepoListItem },
  name: 'RepoList',
  props: {
    repos: {
      type: Object as PropType<GithubRepos>,
      required: true,
    },
  },
});
</script>

<style scoped>
.repo-list {
  margin-top: 100px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: minmax(160px, 1fr);
  gap: 20px;
}
</style>
