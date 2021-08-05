<template>
  <div class="repo-list-item">
    <div class="repo-list-item__main">
      <animated-anchor
        :text="repo.name"
        :href="repo.html_url"
        class="repo-list-item__name"
      />
      <p
        v-if="shortDesc.length > 0"
        class="repo-list-item__desc"
        data-testid="repo-desc"
      >
        {{ shortDesc }}
      </p>
    </div>
    <p
      v-if="language.length > 0"
      class="repo-list-item__lang"
      data-testid="repo-lang"
    >
      {{ language }}
    </p>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  ref,
} from '@vue/runtime-core';
import { GithubRepo } from '@/types';
import { getLanguage } from '@/utils/repoUtils';
import AnimatedAnchor from '../AnimatedAnchor.vue';

export default defineComponent({
  components: { AnimatedAnchor },
  name: 'RepoListItem',
  props: {
    repo: {
      type: Object as PropType<GithubRepo>,
      required: true,
    },
  },
  setup(props) {
    const language = ref<string>('');

    const setLanguage = async () => {
      const { repo } = props;

      if (repo.language) {
        language.value = repo.language;
      } else {
        language.value = await getLanguage(repo);
      }
    };

    onMounted(setLanguage);

    const shortDesc = computed(() => {
      const { description: desc } = props.repo;

      if (desc === null) return '';

      return desc.length > 100 ? `${desc.slice(0, 100)}...` : desc;
    });

    return { language, shortDesc };
  },
});
</script>

<style scoped>
.repo-list-item {
  background-color: rgba(0, 0, 0, 0.25);
  padding: 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.repo-list-item__name {
  font-size: 18px;
  font-weight: 600;
}

.repo-list-item__desc {
  margin-top: 10px;
  font-size: 14px;
}

.repo-list-item__lang {
  font-size: 14px;
}
</style>
