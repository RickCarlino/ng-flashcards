var cardsCtrl = angular.module('App.controllers');

cardsCtrl.controller('cardsCtrl', ['$scope', function($scope) {
    $scope.cards = [{
        front: 'First US President',
        back: 'George Washington',
        editing: false
    },{
        front: 'Days in February',
        back: '28',
        editing: false
    },{
        front: 'Licks to the center of a tootsie pop',
        back: 'NaN', 
        editing: false
    },{
      front: 'Ounces in a soda can',
      back: '12',
      editing: false
    },{
      front: 'Timezone in Phoenix, AZ',
      back: 'AZT',
      editing: false
    },{
      front: 'Chicken baking temperature',
      back: '350 F',
      editing: false
    },{
      front: '2 + 2',
      back: '4',
      editing: false
    }
    ];

    $scope.reviewCard = {front: 'Ready?', back: 'Click below!'}

    //TODO: Add validation, required, etc.
    $scope.newCard = function() {
        $scope.cards.push({
            front: $scope.front,
            back: $scope.back,
            editing: false
        });
        $scope.front = undefined;
        $scope.back = undefined;
    };

    $scope.destroyCard = function(index) {
      return $scope.cards.splice(index, 1);
    };

    $scope.editCard = function(card){
      return card.editing = true;
    };

    $scope.doneEditingCard = function(card){
      return card.editing = false;
    };

    $scope.getCard = function () {
      var old_card = $scope.reviewCard;
      while (old_card === $scope.reviewCard){
        //Keep shuffling until you get a new card.
        // On small decks, repeats are common.
        $scope.reviewCard = _.sample($scope.cards);
      };
      return true;
    }
}]);