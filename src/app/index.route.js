export function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/');

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
        })
        .state('question.map', {
            url: '/map/{questionId}',
            parent: 'question',
            template: '<map-template />'
        })
        .state('question.checkbox', {
            url: '/checkbox/{questionId}',
            parent: 'question',
            template: '<checkbox-template />'
        });
}
