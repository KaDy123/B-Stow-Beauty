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
    if(_scope.title === 'Settings') {
      setTimeout(function() {
        $state.go('tab.settings', {});
      }, 20);
    }
  }
}])

.controller('IndividualCtrl', function($scope, $firebaseArray, $stateParams) {
  //$scope.individual = "This is it";
  console.log("it works");
  var priceRef = new Firebase('https://b-stow-beauty.firebaseio.com/price/' + $stateParams.serviceType);
  $scope.priceInfo = $firebaseArray(priceRef);

})

.controller('ServiceCategoryCtrl', ['$state', function($state){

}])

.controller('SettingsCtrl', function($scope) {

})

.controller('ExploreCtrl', function($scope) {

})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

.controller('ProfileCtrl', function($scope) {

})

.controller('EditProfileCtrl', function($scope) {


})

.controller('HelpCtrl', function($scope) {

})

.controller('FacialCtrl', function($scope){

})

.controller('NailCtrl', function($scope){

})

.controller('BodyCtrl', function($scope){

})

.controller('WaxingCtrl', function($scope){

})

.controller('LaserCtrl', function($scope){

})

.controller('MedicalCtrl', function($scope){

})

.controller('ServicesCtrl', function($scope, Prices) {
  /*Prices.setServiceType("facial");
  $scope.prices = Prices.getPrices();*/
})

.controller('AppointmentsCtrl', function($scope,Reviews,Items) {
  $scope.items = Items;

$scope.addItem = function() {
  var name = prompt ('Service');
  var date= prompt('Date');
  if (name){
    $scope.items.$add({
      'name':name,
      'date':date
    });
}

};
  $scope.reviews = Reviews;

  $scope.addReview = function() {
    var comment = prompt ('How was your experience?');

    if (comment){
      $scope.reviews.$add({
        'comment':comment

      });
}
};



$scope.deleteItem=function (item){
  $scope.item=item;
  $scope.item['status']='deleted';
  $ionicAppointmentsDelegate.closeOptionButtons();
};
$scope.deleteItem=function (item){
  $scope.item=item;
  $scope.item['status']='deleted';
  $ionicAppointmentsDelegate.closeOptionButtons();
};

})

/*$scope.deleteItem=function (item){
  $scope.item=item;
  $scope.item['status']='deleted';
  $ionicAppointmentsDelegate.closeOptionButtons();
};*/

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
