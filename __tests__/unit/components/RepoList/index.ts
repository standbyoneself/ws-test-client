import RepoList from '@/components/Repolist/index.vue';
import { GithubRepos } from '@/types';
import { shallowMount } from '@vue/test-utils';
import repoStub from '../../../../__stubs__/repo.stub';

const reposCount = 3;
const repos: GithubRepos = Array(reposCount).fill(repoStub);

describe('RepoList.vue', () => {
  it(`should render ${reposCount} repo`, () => {
    const wrapper = shallowMount(RepoList, {
      props: {
        repos,
      },
    });

    const repoListItems = wrapper.findAll('repo-list-item-stub');

    expect(repoListItems.length).toBe(reposCount);
  });
});
