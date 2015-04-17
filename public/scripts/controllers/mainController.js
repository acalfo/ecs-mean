/**
 * Main Controller
 */
angular.module('app')
	.controller('mainController', ['$scope', '$location', 'auth',
		function($scope, $location, auth) {
			$scope.isLoggedIn = auth.isLoggedIn;

			/*
				PDF Urls
			 */
		    $scope.theremin = 'style/pdf/theremin.pdf';
		    $scope.softwareSetup = 'style/pdf/softwareSetup.pdf';
		    $scope.piano = 'style/pdf/piano.pdf';
		    $scope.noteNames = 'style/pdf/noteNames.pdf';
		    $scope.hardwareSetup = 'style/pdf/hardwareSetup.pdf';
		    $scope.errorMessages = 'style/pdf/errorMessages.pdf';
		    $scope.componentIdentificationHandout = 'style/pdf/componentIdentificationHandout.pdf';
		    $scope.chipTunes = 'style/pdf/chipTunes.pdf';
		    $scope.blockTypes = 'style/pdf/blockTypes.pdf';
		    $scope.advancedPins = 'style/pdf/advancedPins.pdf';
		    $scope.advancedCode = 'style/pdf/advancedCode.pdf';

		    $scope.lights = 'style/pdf/usingLights.pdf';
		    $scope.buttons = 'style/pdf/usingButtons.pdf';
		    $scope.distanceSensor = 'style/pdf/usingDistanceSensor.pdf';
		    $scope.keyboard = 'style/pdf/usingKeyboard.pdf';
		    $scope.notes = 'style/pdf/playingNotes.pdf';

		    /*
		    	Teacher Authentication variables & handling
		     */
		    //to force re-auth each time you hit a restricted page,
		    //put this variable inside resetAuth function
		    $scope.authenticated = false;

		    //Correct value of secret (private)
		    var secret = 'raspberry3.14s';

		    $scope.handleAuth = function(answer) {
		    	answer = answer.toLowerCase();
		    	if(answer == secret) {
		    		$scope.authenticated = true;
		    	} else {
		    		$scope.error = true;
		    	}
		    };

		    $scope.resetAuth = function() {
		    	$scope.error = false;
		    };
		}
	]
);
