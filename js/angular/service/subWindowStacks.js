IonicModule
    .factory('$ionicSubWindowStacks', [
        '$ionicModal',
        '$ionicPopup',
        function ($ionicModal, $ionicPopup) {
          return {
            areAllEmpty: areAllEmpty
          };

          function areAllEmpty() {
            return $ionicModal._modalStack.length === 0 && $ionicPopup._popupStack.length === 0;
          }
        }
    ]);