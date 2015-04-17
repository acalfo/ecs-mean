/**
 * About Controller
 */
angular.module('app')
  .controller('aboutController', ['$scope', '$window',
    function($scope, $window) {
      $scope.routeTo = function(route) {
        $window.location.href = route;
      };
    }
  ]
);
