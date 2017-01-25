angular
.module('angularAuthentication')
.factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['API', 'TokenService'];
function AuthInterceptor(API, TokenService){
  //http makes request in and out of app.  We are sending headers with config etc, the interceptor has 2 options, make a modification going out or coming in.
  return {
    request(config){
      //Modification
      const token = TokenService.getToken();
      //are we making a request to our API
      if (config.url.indexOf(API) === 0 && token){
        config.headers.Authorization = `Bearer ${token}`;
      }
      console.log(config);
      return config;
    },
    response(res){
      //Modification
      //console.log(res);
      if (res.config.url.indexOf(API) === 0 && res.data.token){
      //  console.log(res.data.token);
        TokenService.setToken(res.data.token);
      }
      return res;
    }
  };
}
