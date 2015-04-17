/**
 * Auth Controller
 */
angular.module('app')
  .controller('authController', [
    '$scope',
    '$location',
    'auth',
    function($scope, $location, auth){
      $scope.user = {};

      $scope.register = function(){
        auth.register($scope.user).error(function(error){
          if(typeof(error) === 'object') {
            $scope.error = error; 
          } else {
            if(error.indexOf('E11000') !== -1) {
              $scope.error = {
                message: 'The username \'' + $scope.user.username + '\' already exists. Please choose another one.'
              }
            } else {
              $scope.error = {
                message: 'An unknown error occurred. Please try again.'
              }
            }
          }
        }).then(function(){
          $location.path('/');
        });
      };

      $scope.logIn = function(){
        auth.logIn($scope.user).error(function(error){
          if(typeof(error) === 'object') {
            $scope.error = error; 
          } else {
            $scope.error = {
              message: 'An unknown error occurred. Please try again.'
            }
          }
        }).then(function(){
          $location.path('/');
        });
      };
    }
  ]);
