'use strict';

// foodstoreApp is something like a namespace for application .. all other controllers are put in this var
var foodstoreApp = angular
    .module('foodstoreApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'templates/home.html'
            })
            .when('/get-categories', {
                templateUrl: 'templates/get-categories.html'
            })
            .when('/register-form', {
                templateUrl: 'templates/register-form.html'
            })
            .when('/login-form', {
                templateUrl: 'templates/login-form.html'
            })
            .when('/get-products-by-categoryId', {                
                templateUrl: 'templates/get-products-by-categoryId.html'
            })
            .otherwise({ redirectTo: '/home' });
    })
    .constant('author', 'Plamen Petkov');