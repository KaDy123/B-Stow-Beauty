angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {})

.controller('MainCtrl', ['$state', function($state) {
  this.onTabSelected = function(_scope) {
    if(_scope.title === 'Home') {
      setTimeout(function() {
        $state.go('tab.dash', {});
      }, 20);
    }
    if(_scope.title === 'Profile') {
      setTimeout(function() {
        $state.go('tab.profile', {});
      }, 20);
    }
  }
}])

.controller('ProfileCtrl', function($scope) {

})


.controller('LoginCtrl', function($scope) {
})
.controller('EditProfileCtrl', function($scope) {


})

.controller('ServicesCtrl', function($scope) {

})

.controller('AppointmentsCtrl', function($scope) {

})

.controller('SpecialsCtrl', function($scope) {

})

.controller('AboutCtrl', function($scope, $ionicLoading) {


  $scope.init = function() {

      //  console.log("Load data from firebase and initialize map");

        var myLatlng = new google.maps.LatLng(13.099968, -59.604046); //Sandy Lane Golf Course lol

        var mapOptions = {
          center: myLatlng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);


         var marker = new google.maps.Marker({
         position: myLatlng,
          map: map,
         title: 'Uluru (Ayers Rock)'
         });

        $scope.map = map;
    };
});
