export function routerConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
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
      template: '<yes-no-template />',
      controller: 'QuestionController',
      controllerAs: 'questionCtrl'
    })
    .state('question.multi', {
      url: '/multi/{questionId}',
      template: '<multi-answer-template />',
      controller: 'QuestionController',
      controllerAs: 'questionCtrl'
    });

  $locationProvider.html5Mode(true);
}
