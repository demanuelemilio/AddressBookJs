'use strict';

angular.module('addressBookJsApp')
	.controller('SingleCtrl',function($scope,localStorageService,$routeParams,$location){

		// $scope.address = localStoreService.get({parseInt($routeParams.id,10)});
		$scope.address = localStorageService.get($routeParams.id);

		$scope.delete = function(){
			localStorageService.remove($routeParams.id);
			$location.url("/");
		};

		$scope.update = function(user){
			user.id = $scope.address.id;
			localStorageService.set($routeParams.id,user);
			$location.url("/");
		};


	});