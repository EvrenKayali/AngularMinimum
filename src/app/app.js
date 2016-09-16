var app = angular.module("angularApp", ['ui.router', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    var viewBase = 'views/';

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: viewBase + 'home.html',
            controller: 'homeController',
            activetab: 'home'
        })
         .state('about', {
             url: '/about',
             controller: 'aboutController',
             templateUrl: viewBase + 'about.html',
             activetab: 'about'
         })
        .state('contact', {
            url: '/contact',
            controller: 'contactController',
            templateUrl: viewBase + 'contact/contact.html',
            activetab: 'contact'
        })
        .state('contact.section1', {
            url: '/section1',
            templateUrl: viewBase + 'contact/contact-section1.html',
            activetab: 'contact'
        })
        .state('contact.section2', {
            url: '/section2',
            templateUrl: viewBase + 'contact/contact-section2.html',
            activetab: 'contact'
        });
}]);

