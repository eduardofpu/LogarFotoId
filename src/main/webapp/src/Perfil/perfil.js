'use strict';

angular.module('lacos')
  .controller('perfilCtrl', function($scope, ngNotify, RestSrv, SERVICE_PATH) {
    $scope.u = {};
    $scope.users = [];

    $scope.permissao = {};
    $scope.permissions = [];
    $scope.showAddEditUser = false;

    ngNotify.config({
      theme: 'pastel'
    });

      $scope.msg = 'PERFIL'

    // Show the form used to edit or add users.
    $scope.show = function() {
      $scope.showAddEditUser = true;
    };

    // Hide the form used to edit or add users.
    $scope.hide = function() {
      $scope.showAddEditUser = false;
      $scope.u = {};
    };

    // Manage CRUD operations.
    var userUrl =  SERVICE_PATH.PRIVATE_PATH + '/perfil';

    $scope.updateLinkImageEdit = function(file){
        var arq = file.split(',');
        $scope.userEdit.user.fileUploadPessoa.mimeType = arq[0];
        $scope.userEdit.user.fileUploadPessoa.file = arq[1];
    };




    $scope.updateLinkImage = function(file){
        var arq = file.split(',');
        $scope.u.user.fileUploadPessoa.mimeType = arq[0];
        $scope.u.user.fileUploadPessoa.file = arq[1];
    };


    $scope.saveUser = function(u) {

      if (u.id ) {

        RestSrv.edit(userUrl, u, function() {
          delete u.password;

          for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].id === u.id) { //=== verifica id e o objeto
              $scope.users[i] = u;
            }


          }
          $scope.hide();// para esconder o forme
          ngNotify.set('User \'' + u.name + '\' Editado com sucesso.', 'success');
        });


      } else {



        RestSrv.add(userUrl, u, function(newCadastro) {
          $scope.users.push(newCadastro);
          $scope.hide();
          ngNotify.set('User \'' + u.name + '\' Salvo com sucesso.', 'success');


        });
      }
    };



    RestSrv.find(userUrl,function(data) {
      $scope.users = data;
      ngNotify.set('Conectado com sucesso.', 'success');
    });


    // Request all data (permission and user).

   var permissionUrl =  SERVICE_PATH.PUBLIC_PATH   + '/permission';
     RestSrv.findCadastro(permissionUrl, function(data) {
         $scope.permissions = data;
  });

  });
