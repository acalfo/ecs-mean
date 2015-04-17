/**
 * Tutorial Controller
 */
angular.module('app')
  .controller('tutorialController', ['$scope', '$location',
    function($scope, $location) {
      /*
      Tutorial Links
       */
      var base = 'resources/tutorials/';
        $scope.tutorials = [{
          path: base +'lights',
            text: 'Blinking the Lights'
      }, {
            path: base + 'notes',
            text: 'Playing Notes'
      }, {
        path: base + 'buttons',
        text: 'Using the Buttons'
      }, {
        path: base + 'distance-sensor',
        text: 'Using the Distance Sensors'
      },{
        path: base + 'keyboard',
        text: 'Using the Keyboard'
      }];

    }
  ]
);
