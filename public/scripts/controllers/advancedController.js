/**
 * Advanced Controller
 */
angular.module('app')
  .controller('advancedController', ['$scope', '$window',
    function($scope, $window) {
      /*
      Advanced Links
       */
      var base = 'resources/advanced/';

        $scope.advanced = [{
          path: base +'code',
            text: 'Advanced Code'
      }, {
        path: base + 'pins',
            text: 'Advanced Pins'
      }];
    }
  ]
);
