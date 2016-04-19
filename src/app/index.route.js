export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('yn', {
      url: '/yn',
      templateUrl: 'app/components/question-template/yes-no/yesNoPage.html',
      controller: 'QuestionController',
      controllerAs: 'questionCtrl'
    });

  $urlRouterProvider.otherwise('/yn');
}
