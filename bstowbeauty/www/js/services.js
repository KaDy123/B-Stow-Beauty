angular.module('starter.services', ['ionic', 'firebase'])
.factory('Prices', ['$firebaseArray', function($firebaseArray){
  var priceRef = new Firebase('https://b-stow-beauty.firebaseio.com/price');
  var service_type = "";
  return {
    getPrices(){
      var ref = priceRef.child(service_type);
      return $firebaseArray(ref);
    },
    setServiceType(name){
      service_type = name;
    }
  }
}])
.factory('Items',['$firebaseArray',function($firebaseArray){
  var itemsRef= new Firebase ('https://b-stow-beauty.firebaseio.com/items');
  return $firebaseArray(itemsRef);
}])
.factory('Reviews',['$firebaseArray',function($firebaseArray){
  var reviewsRef= new Firebase ('https://b-stow-beauty.firebaseio.com/reviews');
  return $firebaseArray(reviewsRef);
}]);
/*.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});*/
