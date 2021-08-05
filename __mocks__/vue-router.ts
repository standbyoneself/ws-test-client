const spyPush = jest.fn();
const spyReplace = jest.fn();

export const useRouter = () => ({
  push: spyPush,
  replace: spyReplace,
});
