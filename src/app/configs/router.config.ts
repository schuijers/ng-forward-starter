export default angular.module('router.config', [])
  .config(['$locationProvider', '$urlRouterProvider', ($locationProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.when('/', 'Dashboard');
  }]);