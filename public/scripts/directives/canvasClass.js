angular.module('app')
.directive('canvasClass', function() {
  return {
    restrict: 'A',
    link: function(iScope, element, attrs) {
      element.find('canvas').addClass('pdf-wrapper');
      element.find('pdf-viewer-toolbar').addClass('nav');
    }
  };
});
