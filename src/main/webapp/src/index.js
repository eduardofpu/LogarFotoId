'use strict';

if (!window.location.origin) {
    window.location.origin = window.location.protocol + '//' + window.location.hostname +(window.location.port ? ':' +
    window.location.port: '');
    console.log(window.location.origin);
  }

var BASE_URL = window.location.origin + '/api';


//var BASE_URL = 'https://anacarla-lacos-baby.herokuapp.com/api';

//var BASE_URL = 'http://localhost:8080/api';
//var BASE_URL = 'http://localhost/lacos.baby.infantil/api';
//var BASE_URL = 'http://191.55.43.119/lacos.baby.infantil/api';
//var BASE_URL = 'http://191.55.43.119/lacos.baby.infantil/api';
//var BASE_URL = 'http://191.55.43.119/api';
//var BASE_URL = 'http://177.106.251.22:888/lacos-baby-infantil/api';
//var BASE_URL = '/lacos/api';
//var BASE_URL = '/api';
//var BASE_URL = 'http://localhost:8080/api';


angular.module('lacos',['checklist-model','ngNotify','ngRoute','ngCookies','ngStorage','angularUtils.directives.dirPagination'])

    .constant('SERVICE_PATH', {
      'ROOT_PATH': BASE_URL,
      'PUBLIC_PATH': BASE_URL + '/public',
      'PRIVATE_PATH': BASE_URL + '/private'

    })
  .config(function($routeProvider) {
    $routeProvider.
    when('/', {
    templateUrl: 'src/home/home.html',
    controller: 'HomeCtrl'
    })
    .when('/login', {
    templateUrl: 'src/login/login.html',
    controller: 'LoginCtrl'
    })

    .when('/user', {
    templateUrl: 'src/user/user.html',
    controller: 'UserCtrl'
    })

    .when('/editUser', {
    templateUrl: 'src/editUser/editUser.html',
    controller: 'editUserCtrl'
    })

    .when('/Clientes', {
    templateUrl: 'src/Clientes/clientes.html',
    controller: 'clientesCtrl'
   })

   .when('/VisualizarClientes', {
   templateUrl: 'src/Clientes/visualizar.html',
   controller: 'clientesCtrl'
   })


   .when('/Modelo', {
   templateUrl: 'src/Modelo/modelo.html',
   controller: 'modeloCtrl'
  })

  .when('/VisualizarModelo', {
  templateUrl: 'src/Modelo/visualizar.html',
  controller: 'modeloCtrl'
  })

  .when('/Pedido', {
  templateUrl: 'src/Pedido/pedido.html',
  controller: 'pedidoCtrl'
 })

 .when('/VisualizarPedido', {
 templateUrl: 'src/Pedido/visualizar.html',
 controller: 'pedidoCtrl'
 })

 .when('/VisualizarMaps', {
 templateUrl: 'src/Pedido/googlemaps.html',
 controller: 'pedidoCtrl'
 })

 .when('/Cadastro', {
      templateUrl: 'src/Cadastro/cadastro.html',
      controller: 'cadastroCtrl'
    })

    .when('/Permission', {
      templateUrl: 'src/Permission/permission.html',
      controller: 'roleCtrl'
    })

    .when('/UserPermission', {
      templateUrl: 'src/UserPermission/permission.html',
      controller: 'userPerCtrl'
    })

     .when('/error', {
      templateUrl: 'src/error/401.html',

    })

    .when('/erroremail', {
      templateUrl: 'src/error/erroremail.html',

    })

    .when('/calculadora', {
      templateUrl: 'src/Pedido/calculadora.html',

    })

    .when('/Compra', {
      templateUrl: 'src/Compra/compra.html',
      controller: 'compraCtrl'

    })

    .when('/Mes', {
      templateUrl: 'src/Mes/mes.html',
      controller: 'mesCtrl'

    })

    .when('/Caixa', {
      templateUrl: 'src/Caixa/caixa.html',
      controller: 'caixaCtrl'

    })
    .when('/Perfil', {
      templateUrl: 'src/Perfil/perfil.html',
      controller: 'perfilCtrl'

    })

    .otherwise({
        redirectTo: '/'

  });


  }).config(function($httpProvider) {

        //$httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $httpProvider.interceptors.push('httpRequestInterceptor');


      })
      .run(function($rootScope, ngNotify, LoginLogoutSrv) {

        $rootScope.authDetails = {name:'', authenticated: false, permissions: [],file:{}};
        ngNotify.config({

          theme: 'pastel'

         });

        LoginLogoutSrv.verifyAuth();
        
        
      //////////////////////imagem/////////////////////////////  
      }).  
        
        directive('appFilereader', function(
        	    $q
        	    ) {
        	    /*
        	    made by elmerbulthuis@gmail.com WTFPL licensed
        	    */
        	    var slice = Array.prototype.slice;

        	    return {
        	      restrict: 'A',
        	      require: '?ngModel',
        	      link: function(scope, element, attrs, ngModel) {
        	        if (!ngModel) {return;}

        	        ngModel.$render = function() {};
        	        function readFile(file) {
        	          var deferred = $q.defer();

        	          var reader = new FileReader();
        	          reader.onload = function(e) {
        	            deferred.resolve(e.target.result);
        	          };
        	          reader.onerror = function(e) {
        	            deferred.reject(e);
        	          };
        	          reader.readAsDataURL(file);

        	          return deferred.promise;
        	        }
        	        element.bind('change', function(e) {
        	          var element = e.target;
        	          if(!element.value) {return;}

        	          element.disabled = true;
        	          $q.all(slice.call(element.files, 0).map(readFile))
        	            .then(function(values) {
        	              if (element.multiple) {ngModel.$setViewValue(values);}
        	              else {ngModel.$setViewValue(values.length ? values[0] : null);}
        	              element.value = null;
        	              element.disabled = false;

        	               });
        	           }); //change
        	          } //link



        	    };


        	  //////////////////fimimagem/////////////////////////////


});
