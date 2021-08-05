import router from '@/router';
import githubService from '@/services/GithubService';
import { GithubUser, GithubRepos, GithubRepo } from '@/types';
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

export interface State {
  isAuthenticated: boolean;
  user?: GithubUser;
  repos?: GithubRepos;
}

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore(): Store<State> {
  return baseUseStore(key);
}

const store = createStore<State>({
  state: {
    isAuthenticated: false,
  },
  getters: {
    sortedReposByDate(state) {
      return state.repos?.sort((a: GithubRepo, b: GithubRepo) => {
        if (a.created_at && b.created_at) {
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        } else {
          return 0;
        }
      });
    },
  },
  mutations: {
    setIsAuthenticated(state, isAuthenticated: boolean) {
      state.isAuthenticated = isAuthenticated;
    },
    setUser(state, user: GithubUser) {
      state.user = user;
    },
    setRepos(state, repos: GithubRepos) {
      state.repos = repos;
    },
  },
  actions: {
    async login({ commit }, code: string) {
      try {
        const { isAuthenticated } = await githubService.login(code);

        commit('setIsAuthenticated', isAuthenticated);
      } catch (error) {
        if (error.message === 'bad_verification_code') {
          router.replace({ name: 'Auth' });
        }
      }
    },
    async logout({ commit }) {
      await githubService.logout();

      commit('setIsAuthenticated', false);
    },
    async checkAuth({ commit }) {
      const { isAuthenticated } = await githubService.checkAuth();

      commit('setIsAuthenticated', isAuthenticated);
    },
    async getUser({ commit }) {
      const user = await githubService.fetchUser();

      commit('setUser', user);
    },
    async getRepos({ commit }) {
      const repos = await githubService.fetchRepos();

      commit('setRepos', repos);
    },
  },
});

export default store;
