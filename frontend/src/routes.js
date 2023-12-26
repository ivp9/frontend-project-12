const apiPath = 'api/v1';

export const appPaths = {
  signUp: '/signup',
  login: '/login',
  notFound: '*',
};

export const apiRoutes = {
  signup: () => [apiPath, 'signUp'].join('/'),
  login: () => [apiPath, 'login'].join('/'),
};
