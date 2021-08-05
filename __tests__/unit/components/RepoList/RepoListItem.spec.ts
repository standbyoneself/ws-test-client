import RepoListItem from '@/components/Repolist/RepoListItem.vue';
import { shallowMount } from '@vue/test-utils';
import repoStub from '../../../../__stubs__/repo.stub';
import flushPromises from 'flush-promises';
import { getLanguage } from '@/utils/repoUtils';

jest.mock('@/utils/repoUtils');

describe('RepoListItem.vue', () => {
  describe('anchor', () => {
    it('should have a correct text', () => {
      const wrapper = shallowMount(RepoListItem, {
        props: {
          repo: repoStub,
        },
      });

      const anchor = wrapper.getComponent('animated-anchor-stub');

      expect(anchor.props('text')).toBe(wrapper.props('repo').name);
    });

    it('should have a correct href', () => {
      const wrapper = shallowMount(RepoListItem, {
        props: {
          repo: repoStub,
        },
      });

      const anchor = wrapper.getComponent('animated-anchor-stub');

      expect(anchor.props('href')).toBe(wrapper.props('repo').html_url);
    });
  });

  describe('description', () => {
    it('should be correct', () => {
      const wrapper = shallowMount(RepoListItem, {
        props: {
          repo: repoStub,
        },
      });

      const desc = wrapper.get('[data-testid="repo-desc"]');

      expect(desc.text()).toBe(wrapper.props('repo').description);
    });

    it('should be sliced up to 100 symbols and have ellipsis if the description length more than 100', () => {
      const wrapper = shallowMount(RepoListItem, {
        props: {
          repo: { ...repoStub, description: '_'.repeat(101) },
        },
      });

      const desc = wrapper.get('[data-testid="repo-desc"]');

      expect(desc.text()).toBe('_'.repeat(100) + '...');
    });

    it('should not be rendered if the description length is not more than 0', () => {
      const wrapper = shallowMount(RepoListItem, {
        props: {
          repo: { ...repoStub, description: '' },
        },
      });

      const desc = wrapper.find('[data-testid="repo-desc"]');

      expect(desc.exists()).toBe(false);
    });

    it('should not be rendered if the description is null', () => {
      const wrapper = shallowMount(RepoListItem, {
        props: {
          repo: { ...repoStub, description: null },
        },
      });

      const desc = wrapper.find('[data-testid="repo-desc"]');

      expect(desc.exists()).toBe(false);
    });
  });

  describe('language', () => {
    it('should be correct', async () => {
      const wrapper = shallowMount(RepoListItem, {
        props: {
          repo: repoStub,
        },
      });

      await flushPromises();

      const lang = wrapper.get('[data-testid="repo-lang"]');

      expect(lang.text()).toBe(wrapper.props('repo').language);
    });

    it('should be retrieved from the `getLanguage() util`', async () => {
      (<jest.Mock>getLanguage).mockImplementation(() => 'TypeScript');

      const wrapper = shallowMount(RepoListItem, {
        props: {
          repo: { ...repoStub, language: null },
        },
      });

      await flushPromises();

      const lang = wrapper.get('[data-testid="repo-lang"]');

      expect(lang.text()).toBe('TypeScript');
    });

    it('should not be rendered if the language length is not more than 0', async () => {
      (<jest.Mock>getLanguage).mockImplementation(() => '');

      const wrapper = shallowMount(RepoListItem, {
        props: {
          repo: { ...repoStub, language: '' },
        },
      });

      await flushPromises();

      const lang = wrapper.find('[data-testid="repo-lang"]');

      expect(lang.exists()).toBe(false);
    });
  });
});
