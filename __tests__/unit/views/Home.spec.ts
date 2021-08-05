import Home from '@/views/Home.vue';
import { flushPromises, shallowMount } from '@vue/test-utils';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';

jest.mock('@/store', () => ({
  useStore: jest.fn(),
}));

jest.mock('vue-router', () => ({
  useRoute: jest.fn(),
}));

jest.mock('@/router');

describe('Home.vue', () => {
  it('should call "login()" from the store if the user is not authenticated and the code is not null', () => {
    const spyDispatch = jest.fn();
    const code = 'e89fdjsarqjdwnb';

    (<jest.Mock>useStore).mockImplementation(() => ({
      ...jest.requireActual('@/store').default,
      state: { isAuthenticated: false },
      dispatch: spyDispatch,
    }));

    (<jest.Mock>useRoute).mockImplementation(() => ({
      query: { code },
    }));

    const store = useStore();

    shallowMount(Home);

    expect(store.dispatch).toHaveBeenCalledWith('login', code);
  });

  it('should call "getUser()" and "getRepos()" from the store if the user is authenticated', async () => {
    const spyDispatch = jest.fn();

    (<jest.Mock>useStore).mockImplementation(() => ({
      ...jest.requireActual('@/store').default,
      state: { isAuthenticated: true },
      dispatch: spyDispatch,
    }));

    (<jest.Mock>useRoute).mockImplementation(() => ({
      query: { code: null },
    }));

    const store = useStore();

    shallowMount(Home);

    await flushPromises();

    expect(store.dispatch).toHaveBeenNthCalledWith(1, 'getUser');
    expect(store.dispatch).toHaveBeenNthCalledWith(2, 'getRepos');
  });
});
