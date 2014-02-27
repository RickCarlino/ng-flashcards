var cardsCtrl = angular.module('App.controllers');

cardsCtrl.controller('cardsCtrl', ['$scope', function ($scope) {
  $scope.cards = [{front: 'question', back: 'answer'}];
  //TODO: Add validation, required, etc.

  $scope.newCard = function () {
    $scope.cards.push({front: $scope.front, back: $scope.back});
    $scope.front = undefined;
    $scope.back = undefined;
  };

  $scope.destroyCard = function (index) {
    console.log('boink!');
    return $scope.cards.splice(index, 1);
  };
}]);
