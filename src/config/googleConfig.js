const OAuthConfig = {
  clientId: "311482209289-pgh12mi0hos00orqsl2773ke1gdsdhjf.apps.googleusercontent.com",
  redirectUri: `${import.meta.env.VITE_FE_API_URL}/login/authenticate`,
  authUri: "https://accounts.google.com/o/oauth2/auth",
};

export const GoogleURL = () => {
  const callbackUrl = OAuthConfig.redirectUri;
  const authUrl = OAuthConfig.authUri;
  const googleClientId = OAuthConfig.clientId;

  const targetUrl = `${authUrl}?redirect_uri=${encodeURIComponent(
    callbackUrl
  )}&response_type=code&client_id=${googleClientId}&scope=openid%20email%20profile`;
  
  return targetUrl;
};