/**
 * Nav Controller
 */
angular.module('app')
  .controller('projectController', ['$scope',
    function($scope) {
      /*
      Project Links
       */
      var base = 'resources/projects/';

        $scope.projects = [{
          path: base +'chip_tunes',
            text: 'Chip Tunes Project'
      }, {
        path: base + 'theremin',
            text: 'Theremin Project'
      }, {
            path: base + 'piano',
            text: 'Piano Project'
      }];

    }
  ]
);
