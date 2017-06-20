IonicModule
    .factory('$ionicCounter', [
        '$ionicSubWindowStacks',
        function($ionicSubWindowStacks) {
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
            if($ionicSubWindowStacks.areAllEmpty()) {
              counter = base;
            }
          }
        }
    ]);