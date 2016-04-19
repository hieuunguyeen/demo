export function yesNoTemplate($log) {

  'ngInject'

  let directive = {
    templateUrl: 'app/components/question-template/yes-no/yesNoTemplate.html',
    restrict: 'E',
    scope: {
      question: '=',
      answer: '='
    },
    controller: 'QuestionController',
    controllerAs: 'questionCtrl',
    link: () => {
      $log.log('Yes/No template');
    }
  }

  return directive;
}
