angular.module('app')
.directive('question', function() {
  var tpl = '<accordion-group is-open="question.isOpen">' +
              '<accordion-heading>' +
                '<i class="pull-right glyphicon" ng-class="{\'glyphicon-chevron-down\': question.isOpen, \'glyphicon-chevron-right\': !question.isOpen}"></i>' +
                '{{question.title}}' +
              '</accordion-heading>' +
              '<div ng-bind-html="question.content"></div> ' +
            '</accordion-group>';
  return {
    restrict: 'E',
    require: '^ngModel',
    scope: {
      question: '=ngModel'
    },
    template: tpl,
    replace:false,
    link: function(iScope, element) {
      //Get panel header & add class.
      var panelHeader = angular.element(element[0].getElementsByClassName('panel-heading'));
      panelHeader.addClass('faq-button');

      //Add panel title class
      angular.element(element[0].getElementsByClassName('panel-title')).addClass('faq-button-title');

      //Watch isOpen & add/remove class based on change
      iScope.$watch('question.isOpen', function(newValue, oldValue) {
        if(oldValue !== newValue) {
          if(newValue === true) {
            panelHeader.addClass('blue');
          } else {
            panelHeader.removeClass('blue');
          }
        }
      });
    }
  };
});
