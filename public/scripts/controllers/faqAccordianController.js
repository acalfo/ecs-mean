angular.module('app').controller('faqAccordianController', ['$scope', '$sce', 'questions', function($scope, $sce, questions) {
	//Set questions from service
  $scope.questions = questions;

	$scope.questions.forEach(function(question) {
		question.content = $sce.trustAsHtml(question.content);
	});

}]);
