IonicModule
    .factory('$ionicCounter', [
        function() {
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
            if(false) { // TODO: reset counter when stacks are empty
              counter = base;
            }
          }
        }
    ]);