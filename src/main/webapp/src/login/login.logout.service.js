'use strict';

angular.module('lacos')
  .service('LoginLogoutSrv', function($http, $cookies, $rootScope, $location, $localStorage, ngNotify, SERVICE_PATH) {
	  
	  var serviceFactory = {};
	    var urlLogin  = SERVICE_PATH.PUBLIC_PATH + '/login';
	    var urlLogout = SERVICE_PATH.PUBLIC_PATH + '/logout';

	    serviceFactory.login = function(email, password) {
	      var requestParams = {
	        method: 'GET',
	        url: urlLogin,
	        headers: {
	          'Content-Type': 'application/json',
	          'Authorization' : 'Basic ' + btoa(email + ':' + password)
      }	       
 };
	      
$http(requestParams).then(
function success(response) {

 var data = response.data;
 
 if (data.name) {
 $rootScope.authDetails = {name:data.name,authenticated:data.authenticated,permissions:data.authorities,file:data.principal.file};
 
 $localStorage.authDetails = $rootScope.authDetails;
 
 $location.path('/');

            ngNotify.set('Bem vindo ' + data.name+ '.', 'success');
  } else {
            $rootScope.authDetails = { name:'',authenticated: false, permissions: [],file:{}};
           
            ngNotify.set('Não foi possível a conexão.', { type: 'failure', duration: 5000 });
            
            $location.url('/erroremail');
          }
  },
       // function failure(response) {
	      function failure() {
          $rootScope.authDetails = {name:'',authenticated: false, permissions: [],file:{}};
         
          ngNotify.set('O e-mail ou a senha que você digitou não correspondem aos nossos registros.', { type: 'failure', duration: 5000 });
        
          $location.url('/erroremail');
        }
      );
   };

    serviceFactory.logout = function() {
      var requestParams = {
        method: 'POST',
        url: urlLogout,
        headers: { 'Content-Type': 'application/json' }


   };

      ngNotify.set('Desconectado com sucesso', { type: 'failure', duration: 5000 });

     // $http(requestParams).finally(function success(response) {
    	  $http(requestParams).finally(function success() {

        delete $localStorage.authDetails;
        
        $rootScope.authDetails = { name:'', authenticated: false, permissions: [],file:{}};
        
        $location.path("/");
      });
    };

    serviceFactory.verifyAuth = function() {
      if ($localStorage.authDetails) {
        $rootScope.authDetails = $localStorage.authDetails;
      }
    };

    return serviceFactory;
  });
