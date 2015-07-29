'use strict';

/* App Module */

var filmsApp = angular.module('filmsApp', [
  'ngRoute',
  'filmsControllers',
  'FilmDirectives',

]);

filmsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
//    All films
        when('/films', {
        templateUrl: 'partials/film-list.html',
        controller: 'FilmListCtrl'
      }).
//    Films category
        when('/films/action', {
        templateUrl: 'partials/film-list-action.html',
        controller: 'FilmListCtrl'
      }).
        when('/films/military', {
        templateUrl: 'partials/film-list-military.html',
        controller: 'FilmListCtrl'
      }).
        when('/films/detective', {
        templateUrl: 'partials/film-list-detective.html',
        controller: 'FilmListCtrl'
      }).
        when('/films/documentary', {
        templateUrl: 'partials/film-list-documentary.html',
        controller: 'FilmListCtrl'
      }).
        when('/films/drama', {
        templateUrl: 'partials/film-list-drama.html',
        controller: 'FilmListCtrl'
      }).
        when('/films/horror', {
        templateUrl: 'partials/film-list-horror.html',
        controller: 'FilmListCtrl'
      }).
        when('/films/history', {
        templateUrl: 'partials/film-list-history.html',
        controller: 'FilmListCtrl'
      }).
        when('/films/crime', {
        templateUrl: 'partials/film-list-crime.html',
        controller: 'FilmListCtrl'
      }).
        when('/films/adventure', {
        templateUrl: 'partials/film-list-adventure.html',
        controller: 'FilmListCtrl'
      }).
        when('/films/sport', {
        templateUrl: 'partials/film-list-sport.html',
        controller: 'FilmListCtrl'
      }).
        when('/films/thriller', {
        templateUrl: 'partials/film-list-thriller.html',
        controller: 'FilmListCtrl'
      }).
        when('/films/fantastic', {
        templateUrl: 'partials/film-list-fantastic.html',
        controller: 'FilmListCtrl'
      }).
        when('/films/fantasy', {
        templateUrl: 'partials/film-list-fantasy.html',
        controller: 'FilmListCtrl'
      }).
//    Serials category
        when('/serials', {
        templateUrl: 'partials/serials.html',
        controller: 'FilmListCtrl'
      }).
        when('/serials/detective', {
        templateUrl: 'partials/serials-detective.html',
        controller: 'FilmListCtrl'
      }).
        when('/serials/history', {
        templateUrl: 'partials/serials-history.html',
        controller: 'FilmListCtrl'
      }).
        when('/serials/drama', {
        templateUrl: 'partials/serials-drama.html',
        controller: 'FilmListCtrl'
      }).
        when('/serials/horror', {
        templateUrl: 'partials/serials-horror.html',
        controller: 'FilmListCtrl'
      }).
        when('/serials/fantastic', {
        templateUrl: 'partials/serials-fantastic.html',
        controller: 'FilmListCtrl'
      }).    
//    Films detail
        when('/films/:filmId', {
        templateUrl: 'partials/film-detail.html',
        controller: 'FilmDetailCtrl'
      }). 
//    Cartoons category
        when('/cartoons', {
        templateUrl: 'partials/cartoon-list.html',
        controller: 'FilmListCtrl'
      }).
        when('/cartoons/feature', {
        templateUrl: 'partials/cartoon-list-feature.html',
        controller: 'FilmListCtrl'
      }).
        when('/cartoons/serial', {
        templateUrl: 'partials/cartoon-list-serial.html',
        controller: 'FilmListCtrl'
      }).    
    //    Films Top
      when('/filmsTop', {
        templateUrl: 'partials/film-top-100.html',
        controller: 'FilmsTopListCtrl'
      }).
      when('/cartoonstop', {
      templateUrl: 'partials/cartoon-top-50.html',
      controller: 'FilmsTopListCtrl'
      }).
      when('/filmtop50dearest', {
      templateUrl: 'partials/film-top-50-dearest.html',
      controller: 'FilmsTopListCtrl'
      }).
      when('/serialstop50', {
      templateUrl: 'partials/serials-top-50.html',
      controller: 'FilmsTopListCtrl'
      }).
      when('/top2013', {
      templateUrl: 'partials/top-2013.html',
      controller: 'FilmsTopListCtrl'
      }).
      when('/top2014', {
      templateUrl: 'partials/top-2014.html',
      controller: 'FilmsTopListCtrl'
      }).
      when('/top2015', {
      templateUrl: 'partials/top-2015.html',
      controller: 'FilmsTopListCtrl'
      }).
    
       otherwise({
        redirectTo: '/films'
      });
  }]);