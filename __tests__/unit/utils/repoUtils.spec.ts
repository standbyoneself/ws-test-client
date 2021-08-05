import { extractLanguage, getLanguage } from '@/utils/repoUtils';
import { GithubRepo, Languages } from '@/types';
import repoStub from '../../../__stubs__/repo.stub';
import githubService from '@/services/GithubService';

jest.mock('@/services/GithubService', () => ({
  fetchLanguages: jest.fn(),
}));

const languages: Languages = {
  JavaScript: 10321,
  TypeScript: 546,
};

describe('repoUtils.ts', () => {
  describe('extractLanguage()', () => {
    it('should extract the language', () => {
      expect(extractLanguage(languages)).toBe('JavaScript');
    });
  });

  describe('getLanguage()', () => {
    it('should return the correct language if the owner exists in repo', async () => {
      const repo: GithubRepo = {
        ...repoStub,
      };

      (<jest.Mock>githubService.fetchLanguages).mockResolvedValue(languages);

      expect(await getLanguage(repo)).toBe('JavaScript');
    });

    it('should return an empty string if the owner of the repository is null', async () => {
      const repo: GithubRepo = {
        ...repoStub,
        owner: null,
      };

      expect(await getLanguage(repo)).toBe('');
    });
  });
});
