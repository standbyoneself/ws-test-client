import { Auth, GithubRepos, GithubUser, Languages } from '@/types';
import { API_URL } from '@/constants';

interface IGithubService {
  login: (
    clientId: string,
    clientSecret: string,
    code: string
  ) => Promise<Auth>;

  checkAuth: () => Promise<Auth>;

  logout: () => void;

  fetchUser: () => Promise<GithubUser>;

  fetchRepos: (username: string) => Promise<GithubRepos>;

  fetchLanguages: (username: string, repo: string) => Promise<Languages>;
}

class GithubService implements IGithubService {
  async login(code: string): Promise<Auth> {
    const response = await fetch(`${API_URL}/login?code=${code}`, {
      headers: {
        Accept: 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      if (response.status === 406) {
        const { error } = await response.json();
        throw new Error(error); // bad_verification_code
      }
    }

    const data: Auth = await response.json();

    return data;
  }

  async checkAuth() {
    const response = await fetch(`${API_URL}/checkAuth`, {
      headers: {
        Accept: 'application/json',
      },
      credentials: 'include',
    });

    const data: Auth = await response.json();

    return data;
  }

  async logout() {
    await fetch(`${API_URL}/logout`, {
      credentials: 'include',
    });
  }

  async fetchUser(): Promise<GithubUser> {
    const response = await fetch(`${API_URL}/user`, {
      headers: {
        Accept: 'application/json',
      },
      credentials: 'include',
    });

    const user: GithubUser = await response.json();

    return user;
  }

  async fetchRepos(): Promise<GithubRepos> {
    const response = await fetch(`${API_URL}/repos`, {
      headers: {
        Accept: 'application/json',
      },
      credentials: 'include',
    });

    const repos: GithubRepos = await response.json();

    return repos;
  }

  async fetchLanguages(username: string, repo: string): Promise<Languages> {
    const response = await fetch(`${API_URL}/${username}/${repo}/languages`, {
      headers: {
        Accept: 'application/json',
      },
      credentials: 'include',
    });

    const languages: Languages = await response.json();

    return languages;
  }
}

export default new GithubService();
