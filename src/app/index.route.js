export function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/question/yn/0');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
        .state('question', {
            url: '/question',
            template: '<div ui-view></div>',
            controller: 'QuestionController',
            controllerAs: 'questionCtrl'
        })
        .state('question.yn', {
            url: '/yn/{questionId}',
            parent: 'question',
            template: '<yes-no-template />'
        })
        .state('question.multi', {
            url: '/multi/{questionId}',
            parent: 'question',
            template: '<multi-answer-template />'
        });

    $locationProvider.html5Mode(true);
}
