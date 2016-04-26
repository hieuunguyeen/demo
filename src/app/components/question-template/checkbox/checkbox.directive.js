export function checkboxTemplate() {

    'ngInject';

    let directive = {
        templateUrl: 'app/components/question-template/checkbox/checkbox.html',
        restrict: 'E',
        controller: 'QuestionController',
        controllerAs: 'questionCtrl',
        link: (scope, elem, attrs, controller) => {
            controller.setQuestion(controller.$state.params.questionId);
        }
    }

    return directive;
}
