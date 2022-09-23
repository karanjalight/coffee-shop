/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-bqerrxl5.us.auth0.com', // the auth0 domain prefix
    audience: 'coffeeShop', // the audience set for the auth0 app
    clientId: '7URTOeeGK5DFepWv2xwovzXhIDvDI1ym', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8080', // the base url of the running ionic application. 
  }
};
