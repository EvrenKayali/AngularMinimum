var app = angular.module("app", ['ui.router', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    var viewBase = 'views/';

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: viewBase + 'home.html',
            controller: 'homeController'
        })
         .state('about', {
             url: '/about',
             controller: 'aboutController',
             templateUrl: viewBase + 'about.html',
         })
        .state('contact', {
            url: '/contact',
            controller: 'contactController',
            templateUrl: viewBase + 'contact/contact.html',
        })
        .state('contact.section1', {
            url: '/section1',
            templateUrl: viewBase + 'contact/contact-section1.html'
        })
        .state('contact.section2', {
            url: '/section2',
            templateUrl: viewBase + 'contact/contact-section2.html'
        });
}]);

