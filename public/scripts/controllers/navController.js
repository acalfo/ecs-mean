/**
 * Nav Controller
 */
angular.module('app')
  .controller('navController', ['$scope', '$location', 'auth',
    function($scope, $location, auth) {
      /*
        Set up Nav bar
       */
      $scope.navItems = [{
          path: '',
            text: 'Home'
      }, {
            path: 'resources',
            text: 'Resources'
      }, {
        path: 'faq',
        text: 'FAQ'
      }];

      $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || '';
        return page === currentRoute ? 'active' : '';
      };

      //Nav Auth methods ~
      $scope.isLoggedIn = auth.isLoggedIn;
      $scope.currentUser = auth.currentUser;
      $scope.logOut = auth.logOut;
    }
  ]
);
