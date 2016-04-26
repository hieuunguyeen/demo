export function multiAnswerTemplate() {

    'ngInject';

    let directive = {
        templateUrl: 'app/components/question-template/multiple-answer/multiAnswerTemplate.html',
        restrict: 'E',
        controller: 'QuestionController',
        controllerAs: 'questionCtrl',
        link: (scope, element, attrs, controller) => {
          controller.setQuestion(controller.$state.params.questionId);
        }
    }

    return directive;
}
