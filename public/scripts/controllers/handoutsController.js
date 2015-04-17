/**
 * Handouts Controller
 */
angular.module('app')
  .controller('handoutsController', ['$scope',
    function($scope) {
      /*
      Handouts Links
       */
      var base = 'resources/handouts/';
      $scope.handouts = [{
          path: base +'block_types',
            text: 'Block Types'
      }, {
        path: base + 'component_handout',
            text: 'Component Identification Handout'
      }, {
            path: base + 'note_names',
            text: 'Note Names'
      }];
    }
  ]
);
