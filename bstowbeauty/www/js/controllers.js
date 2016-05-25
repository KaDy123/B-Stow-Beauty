angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  this.onTabSelected = function(_scope){
    console.log(_scope);
    if(_scope.title === 'Home') {
      setTimeout(function() {
        $state.go('tabs.home', {});
      },20);
      }
    }
  })

.controller('FindCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {})

.controller('ServicesCtrl', function($scope) {})

.controller('AppointmentsCtrl', function($scope) {})

.controller('SpecialsCtrl', function($scope) {})

.controller('PricesCtrl', function($scope) {});
