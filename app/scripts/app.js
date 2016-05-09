'use strict';
angular
  .module('addressBookJsApp', [
  	'ngRoute','LocalStorageModule','ngMessages','countrySelect'
  	])
  .config(function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('address');
  })
  .config(function ($routeProvider) {
  	$routeProvider
  	.when('/', {
  			templateUrl :  'views/main.html',
  			controller  :  'MainCtrl',
  			controllerAs:  'main'	
  		})
    .when('/address', {
        templateUrl :  'views/edit.html',
        controller  :  'EditCtrl',
        controllerAs:  'edit' 
    })
    .when('/address/:id', {
        templateUrl :  'views/edit.html',
        controller  :  'SingleCtrl',
        controllerAs:  'edit' 
    });

  });
