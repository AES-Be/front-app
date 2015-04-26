'use strict';

var app = angular.module('app', ['ngRoute',
                                 'ngAnimate',
                                 'directives.slideshow']);

app.config(function ($animateProvider) {
  $animateProvider.classNameFilter(/angular-animate/);
});

app.config(function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
});

app.config(function ($routeProvider, $httpProvider) {
  $routeProvider
      .when('/', {templateUrl: 'view/home'})
      .when('/about', {templateUrl: 'view/about'})
      .when('/events', {templateUrl: 'view/events'})
      .when('/membership', {templateUrl: 'view/membership'})
      .when('/students', {templateUrl: 'view/students'})
      .otherwise({redirectTo: '/'});
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  delete $httpProvider.defaults.headers.common['Content-Type'];
  delete $httpProvider.defaults.headers.common['Accept-Ranges'];

});
