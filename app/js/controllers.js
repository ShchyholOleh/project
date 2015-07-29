'use strict';

/* Controllers */

var filmsControllers = angular.module('filmsControllers', []);

filmsControllers.controller('FilmListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('films/films.json').success(function(data) {
      $scope.films = data;
    });

   
  }]);

filmsControllers.controller('FilmDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('films/' + $routeParams.filmId + '.json').success(function(data) {
      $scope.film = data;
    });
  }]);

filmsControllers.controller('FilmsTopListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('filmsTop/filmsTop.json').success(function(data) {
      $scope.filmsTop = data;
    }); 
  }]);

