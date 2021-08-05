import { Endpoints } from '@octokit/types';

export interface Auth {
  isAuthenticated: boolean;
}

export type GithubUser = Endpoints['GET /user']['response']['data'];

export type GithubRepos =
  Endpoints['GET /users/{username}/repos']['response']['data'];

export type GithubRepo = GithubRepos[number];

export type Languages =
  Endpoints['GET /repos/{owner}/{repo}/languages']['response']['data'];
