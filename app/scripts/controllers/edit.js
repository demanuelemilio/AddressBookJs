'use strict';


angular.module('addressBookJsApp')
	.controller('EditCtrl',function($scope,localStorageService,$location){
		$scope.localStorageDemo = localStorageService.get('localStorageDemo');
			
			$scope.save = function(user){
				if(localStorageService.isSupported){	
					var randdomId = Math.floor((Math.random()*10000)+1);
					user.id = randdomId;
					localStorageService.set(randdomId,user);
					$scope.cleanForm();
					$location.url("/");
				}
			};

			$scope.cleanForm = function(){
				$("#firstName").val("");
				$("#lastName").val("");
				$("#email").val("");
			};

			$scope.userId = function(){
				return localStorageService.length();
			};

	});