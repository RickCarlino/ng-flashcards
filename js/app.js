var App = angular.module('App', [
  'ngRoute',
  'App.controllers'
]);
angular.module('App.controllers', []);

App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/cards', {
        templateUrl: 'partials/cards.html',
        controller: 'cardsCtrl'
    }).
    when('/review', {
        templateUrl: 'partials/review.html',
        controller: 'cardsCtrl'
    }).
    when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'cardsCtrl'
    }).
    otherwise({
        redirectTo: '/main'
    });
}]);