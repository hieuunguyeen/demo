export function yesNoTemplate() {

  'ngInject';

  let directive = {
    templateUrl: 'app/components/question-template/yes-no/yesNoTemplate.html',
    restrict: 'E',
    controller: 'QuestionController',
    controllerAs: 'questionCtrl',
    link: (scope, element, attrs, controller) => {
      controller.setQuestion(controller.$state.params.questionId);
    }
  }

  return directive;
}
