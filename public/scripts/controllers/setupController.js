/**
 * Nav Controller
 */
angular.module('app')
  .controller('setupController', ['$scope',
    function($scope) {
      /*
      Setup Links
       */
      var base = 'resources/setup/';
          $scope.setup = [{
          path: base +'hardware',
            text: '1. Hardware Setup'
      }, {
            path: base + 'software',
            text: '2. Software Setup'
      }];

    }
  ]
);
