import { useStore } from '@/store';
import router from '@/router';

jest.mock('@/store', () => ({
  useStore: () => ({
    ...jest.requireActual('@/store').default,
  }),
}));

jest.mock('@/router');

jest.mock('@/services/GithubService', () => ({
  login: jest.fn().mockRejectedValue(new Error('bad_verification_code')),
}));

describe('Store', () => {
  it('should redirect to Auth view if the error is caused while login', async () => {
    const store = useStore();

    await store.dispatch('login');

    expect(router.replace).toHaveBeenCalledWith({ name: 'Auth' });
  });
});
