var app = angular.module('app', ['ngRoute', 'ngAnimate', 'directives.slideshow']);

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
      .when('/discography', {templateUrl: 'view/discography'})
      .when('/studio', {templateUrl: 'view/studio'})
      .when('/contact', {templateUrl: 'view/contact'})
      .otherwise({redirectTo: '/'});
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  delete $httpProvider.defaults.headers.common['Content-Type'];
  delete $httpProvider.defaults.headers.common['Accept-Ranges'];

});
