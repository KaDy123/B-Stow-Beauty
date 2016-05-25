angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AboutCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {})

.controller('ServicesCtrl', function($scope) {})

.controller('AppointmentsCtrl', function($scope) {})

.controller('SpecialsCtrl', function($scope) {})

.controller('MainCtrl', ['$state', function($state) {
  this.onTabSelected = function(_scope) {
    if(_scope.title === 'Home') {
      setTimeout(function() {
        $state.go('tab.dash', {});
      }, 20);
    }
  }
}]);
