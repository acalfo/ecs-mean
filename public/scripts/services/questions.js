angular.module('app')

.factory('questions', [
  questions
]);

  function questions() {
    return [{
      title: 'How can I report software/hardware problems?',
      content: 'Software and hardware problems can be reported to the MUzECS team '+
                'by sending an email to ' +
                '<a href="mailto:mu.pumpcs@gmail.com">mu.pumpcs@gmail.com</a></br>',
      isOpen: false
    }, {
      title: 'How can I test this?',
      content: 'By clicking the button. Nice Job.',
      isOpen: false
    }, {
      title: 'How can I test this?',
      content: 'By clicking the button. Nice Job.',
      isOpen: false
    }, {
      title: 'How can I test this?',
      content: 'By clicking the button. Nice Job.',
      isOpen: false
    }, {
      title: 'How can I test this?',
      content: 'By clicking the button. Nice Job.',
      isOpen: false
    }];
}
