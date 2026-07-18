export const loginUser = async (repository, credentials) => {
  return await repository.login(credentials);
};