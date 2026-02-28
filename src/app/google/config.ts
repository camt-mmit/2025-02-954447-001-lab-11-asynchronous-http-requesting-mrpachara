import { OauthClientConfiguration } from './types/services';

export const googleOauthConfig: OauthClientConfiguration = {
  name: 'google',
  // id: '209689905225-dj1bo29m0c7or5926cv4bb1nu5aru0cv.apps.googleusercontent.com',
  // secret: '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',
  id: '209689905225-o4li7ageadhnatgj9q1hpo7o0a0hpbsd.apps.googleusercontent.com',
  secret: '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',
  tokenUrl: 'https://oauth2.googleapis.com/token',
  authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
  redirectUrl: 'http://localhost:4200/google/authorization',
};
