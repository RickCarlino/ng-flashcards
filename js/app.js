var titlexyzApp = angular.module('titlexyzApp', [
  'ngRoute',
  'titlexyzApp.controllers'
]);
angular.module('titlexyzApp.controllers', []);

titlexyzApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/menu1', {
        templateUrl: 'partials/menu1.html',
        controller: 'menu1Ctrl'
    }).
    when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'mainCtrl'
    }).
    otherwise({
        redirectTo: '/main'
    });
}]);