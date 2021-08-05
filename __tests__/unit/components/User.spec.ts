import User from '@/components/User.vue';
import { shallowMount } from '@vue/test-utils';
import userStub from '../../../__stubs__/user.stub';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';

jest.mock('vue-router');
jest.mock('@/store');

describe('User.vue', () => {
  describe('avatar', () => {
    it('should have a correct src', () => {
      const wrapper = shallowMount(User, {
        props: {
          user: userStub,
        },
      });

      const avatar = wrapper.get('[data-testid="user-avatar"]');

      expect(avatar.attributes('src')).toBe(wrapper.props('user').avatar_url);
    });
  });

  describe('anchor', () => {
    it('should have a correct text', () => {
      const wrapper = shallowMount(User, {
        props: {
          user: userStub,
        },
      });

      const anchor = wrapper.getComponent('animated-anchor-stub');

      expect(anchor.props('text')).toBe(wrapper.props('user').login);
    });

    it('should have a correct href', () => {
      const wrapper = shallowMount(User, {
        props: {
          user: userStub,
        },
      });

      const anchor = wrapper.getComponent('animated-anchor-stub');

      expect(anchor.props('href')).toBe(wrapper.props('user').html_url);
    });
  });

  describe('logout icon', () => {
    it('should call `logout()` on click', async () => {
      const wrapper = shallowMount(User, {
        props: {
          user: userStub,
        },
      });

      const store = useStore();
      const router = useRouter();

      const logoutIcon = wrapper.get('[data-testid="user-logout-icon"]');

      await logoutIcon.trigger('click');

      expect(store.dispatch).toHaveBeenCalledWith('logout');
      expect(router.push).toHaveBeenCalledWith({ name: 'Auth' });
    });
  });
});
