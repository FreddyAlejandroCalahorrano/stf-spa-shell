export const environment = {
  production: false,
  apiUrl: '',
  microApps: "/staffingshell/assets/microapp-cert.json",
  mainPath: '/main',
  timeSession: 300,
  authProvider: {
    accessTokenName: 'access_token',
    authToken: 'auth_token',
    profile_mail: 'profile_mail',
    scopes: [""],
    clientId: '10f215a8-516a-49ca-8eb3-dc3fc22412d7',
    tenantId: 'f5b0d682-1497-4db0-9019-660035554e72',
    redirectUrl: '/staffingshell',
    authority: 'https://login.microsoftonline.com/f5b0d682-1497-4db0-9019-660035554e72'
  },
  storage: {
    key: '<6aR!DZj5)'
  },
  translationFiles: 'http://localhost:4200/assets/locales/'
};
