export function multiAnswerTemplate() {

  'ngInject';

  let directive = {
    templateUrl: 'app/components/question-template/multiple-answer/multiAnswerTemplate.html',
    restrict: 'E',
    controller: 'QuestionController',
    controllerAs: 'questionCtrl',
    scope: {
      question: '@',
      answer: '@'
    },
    link: (scope, element, attrs, controller) => {
      controller.setQuestion(scope.question, scope.answer.split('|'));
    }
  }

  return directive;
}
