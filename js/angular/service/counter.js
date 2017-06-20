IonicModule
    .factory('$ionicCounter', [
        '$ionicModal',
        '$ionicPopup',
        function($ionicModal, $ionicPopup) {
          var base = 1000;
          var counter = base;
          return {
            getNext: getNext,
            shouldBeReset: shouldBeReset
          };

          function getNext() {
            return ++counter;
          }

          function shouldBeReset() {
            if($ionicModal._modalStack.length === 0 && $ionicPopup._popupStack.length === 0) {
              counter = base;
            }
          }
        }
    ]);