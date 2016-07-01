// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'firebase'])
.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
})
/*.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})*/

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.explore', {
      url: '/explore',
      views: {
        'tab-explore': {
          templateUrl: 'templates/tab-explore.html',
          controller: 'ExploreCtrl'
        }
      }
    })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })

  .state('tab.about', {
      url: '/settings/about',
      views: {
        'tab-settings': {
          templateUrl: 'templates/tab-about.html',
          controller: 'AboutCtrl'
        }
      }
    })

  .state('tab.profile', {
    url: '/settings/profile',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('tab.help', {
    url: '/settings/help',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-help.html',
        controller: 'HelpCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('tab.editProfile', {
    url: '/profile/editProfile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-editprofile.html',
        controller: 'EditProfileCtrl'
      }
    }
  })

  .state('tab.services', {
    url: '/dash/services',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-services.html',
        controller: 'ServicesCtrl'
        }
      }
  })

  .state('tab.individual', {
    url: '/dash/services/:serviceType',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tabs-individual.html',
        controller: 'IndividualCtrl'
      }
    }
  })

  /*.state('tab.nail', {
    url: '/dash/services/nail',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-nail.html',
        controller: 'NailCtrl'
        }
      }
  })
  .state('tab.body', {
    url: '/dash/services/body',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-body.html',
        controller: 'BodyCtrl'
        }
      }
  })
  .state('tab.waxing', {
    url: '/dash/services/waxing',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-waxing.html',
        controller: 'WaxingCtrl'
        }
      }
  })
  .state('tab.laser', {
    url: '/dash/services/laser',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-laser.html',
        controller: 'LaserCtrl'
        }
      }
  })
  .state('tab.medical', {
    url: '/dash/services/medical',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-medical.html',
        controller: 'MedicalCtrl'
        }
      }
  })*/
  .state('tab.appointments', {
    url: '/dash/appointments',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-appointments.html',
        controller: 'AppointmentsCtrl'
        }
      }
  })

  .state('tab.specials', {
    url: '/dash/specials',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-specials.html',
        controller: 'SpecialsCtrl'
        }
      }
  });

  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/tab/dash');
  $urlRouterProvider.otherwise('/login');

});
