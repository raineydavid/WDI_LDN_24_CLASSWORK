angular
  .module('angularAuthentication')
  .factory('AuthInterceptor', AuthInterceptor)

AuthInterceptor.$inject = ['API', 'TokenService'];
function AuthInterceptor(API, TokenService){
  return {
    request(config){
      console.log(config);
      return config;
    },
    response(res){
      if (res.config.url.indexOf(API) ===0 && res.data.token){
        TokenService.setToken(res.data.token);
        //console.log(res.data.token);
      }
      return res;
    }
  };
}
