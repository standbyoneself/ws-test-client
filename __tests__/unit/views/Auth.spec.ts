import Auth from '@/views/Auth.vue';
import { shallowMount } from '@vue/test-utils';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';

jest.mock('@/store', () => ({
  useStore: jest.fn(),
}));

jest.mock('vue-router');

describe('Auth.vue', () => {
  it('should call `router.replace()` if the user is authenticated', () => {
    (<jest.Mock>useStore).mockImplementation(() => ({
      state: { isAuthenticated: true },
    }));

    shallowMount(Auth);

    const router = useRouter();

    expect(router.replace).toHaveBeenCalledWith({ name: 'Home' });
  });
});
