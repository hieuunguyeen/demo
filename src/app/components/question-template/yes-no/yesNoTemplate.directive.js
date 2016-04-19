// export function yesNoTemplate() {
export function yesNoTemplate($log) {

  'ngInject'
  let directive = {
    templateUrl: 'app/components/question-template/yes-no/yesNoTemplate.html',
    restrict: 'E',
    controller: 'QuestionController',
    controllerAs: 'questionCtrl',
    scope: {
      question: '@',
      answer: '@'
    },
    link: (scope, element, attrs, controller) => {
      // $log.log(scope.question);
      controller.setQuestion(scope.question, scope.answer.split('/'));
    }
  }

  return directive;
}
