import githubService from '@/services/GithubService';
import { GithubRepo, Languages } from '@/types';

export function extractLanguage(languages: Languages): string {
  return Object.keys(languages)[0];
}

export async function getLanguage(repo: GithubRepo): Promise<string> {
  if (repo.owner?.login) {
    const languages = await githubService.fetchLanguages(
      repo.owner.login,
      repo.name
    );

    return extractLanguage(languages);
  } else {
    return '';
  }
}
