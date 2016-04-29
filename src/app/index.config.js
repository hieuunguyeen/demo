export function config ($logProvider, $mdThemingProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);
  $mdThemingProvider.theme('default');
  // $locationProvider.html5Mode(true);
}
