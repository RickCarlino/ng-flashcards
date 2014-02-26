var flashcardsApp = angular.module('flashcardsApp', [
  'ngRoute',
  'flashcardsApp.controllers'
]);
angular.module('flashcardsApp.controllers', []);

flashcardsApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/cards', {
        templateUrl: 'partials/cards.html',
        controller: 'cardsCtrl'
    }).
    when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'mainCtrl'
    }).
    otherwise({
        redirectTo: '/main'
    });
}]);