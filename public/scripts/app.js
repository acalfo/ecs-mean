// public/core.js
app = angular.module('app', [
  'ngRoute',
  'pdf',
  'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.php'
      })
      .when('/login', {
        templateUrl: 'partials/auth/login.html',
        controller: 'authController'
        //@todo onenter
      })
      .when('/register', {
        templateUrl: 'partials/auth/register.html',
        controller: 'authController'
        //@todo onenter
      })
      .when('/faq', {
	      templateUrl: 'partials/faq.html',
        controller: 'faqAccordianController'
      })
      /*
        Resource Routes
       */
      .when('/resources', {
        templateUrl: 'partials/resources/index.html',
        controller: 'resourceController'
      })
      /*
        Sample Project Routes
       */
      .when('/resources/projects', {
        templateUrl: 'partials/resources/projects/index.html',
        controller: 'projectController'
      })
      .when('/resources/projects/chip_tunes', {
        templateUrl: 'partials/resources/projects/chipTunes.html'
      })
      .when('/resources/projects/piano', {
        templateUrl: 'partials/resources/projects/piano.html'
      })
      .when('/resources/projects/theremin', {
        templateUrl: 'partials/resources/projects/theremin.html'
      })

      /*
        Tutorial Routes
       */
      .when('/resources/tutorials', {
        templateUrl: 'partials/resources/tutorials/index.html',
        controller: 'tutorialController'
      })
      .when('/resources/tutorials/lights', {
        templateUrl: 'partials/resources/tutorials/lights.html'
      })
      .when('/resources/tutorials/distance-sensor', {
        templateUrl: 'partials/resources/tutorials/distanceSensor.html'
      })
      .when('/resources/tutorials/notes', {
        templateUrl: 'partials/resources/tutorials/notes.html'
      })
      .when('/resources/tutorials/keyboard', {
        templateUrl: 'partials/resources/tutorials/keyboard.html'
      })
      .when('/resources/tutorials/buttons', {
        templateUrl: 'partials/resources/tutorials/buttons.html'
      })

      /*
        Setup Routes
       */
      .when('/resources/setup', {
        templateUrl: 'partials/resources/setup/index.html',
        controller: 'setupController'
      })
      .when('/resources/setup/software', {
        templateUrl: 'partials/resources/setup/softwareSetup.html'
      })
      .when('/resources/setup/hardware', {
        templateUrl: 'partials/resources/setup/hardwareSetup.html'
      })

      /*
        Advanced Materials Routes
       */
      .when('/resources/advanced', {
        templateUrl: 'partials/resources/advanced/index.html',
        controller: 'advancedController'
      })
      .when('/resources/advanced/code', {
        templateUrl: 'partials/resources/advanced/advancedCode.html'
      })
      .when('/resources/advanced/pins', {
        templateUrl: 'partials/resources/advanced/advancedPins.html'
      })

      /*
        Handout Routes
       */
      .when('/resources/handouts', {
        templateUrl: 'partials/resources/handouts/index.html',
        controller: 'handoutsController'
      })
      .when('/resources/handouts/block_types', {
        templateUrl: 'partials/resources/handouts/blockTypes.html'
      })
      .when('/resources/handouts/component_handout', {
        templateUrl: 'partials/resources/handouts/componentIdentificationHandout.html'
      })
      .when('/resources/handouts/error_messages', {
        templateUrl: 'partials/resources/handouts/errorMessages.html'
      })
      .when('/resources/handouts/note_names', {
        templateUrl: 'partials/resources/handouts/noteNames.html'
      })
      .when('/about', {
		    templateUrl: 'partials/about.html',
        controller: 'aboutController'
	    })
      .otherwise('/');
  }
);
