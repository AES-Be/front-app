'use strict';

app.controller('navCtrl', function ($scope, $rootScope, $location) {

  $rootScope.navHomeActive = false;
  $rootScope.navAboutActive = false;
  $rootScope.navEventsActive = false;
  $rootScope.navMembershipActive = false;
  $rootScope.navStudentsActive = false;

  // switch ($location.path()) {
  // case '/':
  //   break;
  // case '/about':
  //   break;
  // default:
  // }

  // $scope.navAction = function (id) {
  //   if (id === 'home') {
  //   } else if (id === 'about') {
  //   } else {
  //   }
  // };
});
