/**
 * Resource Controller
 */
angular.module('app')
  .controller('resourceController', ['$scope',
    function($scope) {
      /*
        Resource Links
         */
        var base = 'resources';
        $scope.resources = [{
          path: base +'/projects',
            text: 'Sample Projects'
      }, {
            path: base + '/setup',
            text: 'Setup'
      }, {
            path: base + '/tutorials',
            text: 'Tutorials'
      }, {
            path: base + '/handouts',
            text: 'Handouts'
      }, {
            path: base + '/advanced',
            text: 'Advanced'
      }];
    }
  ]
);
