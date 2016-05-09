'use strict';


angular.module('addressBookJsApp')
  .controller('MainCtrl', function ($scope,localStorageService,$location) {

    // var listLocalItems = localStorageService.get('address');
    $scope.items = [];
    // for(var address in localStorageService.keys()){
    //     $scope.items.push(localStorageService.get(address));
    // }
    // for(var i=0;i<localStorageService.length();i++){
    //     $scope.items.push(localStorageService.get(i));
    // }

    $scope.$watch($scope.items,function(){
        // alert("items has changed");
        var lsKeys = localStorageService.keys();
        // alert(lsKeys);
        for(var i=0;i<lsKeys.length;i++){
            // alert(lsKeys[i]);
            $scope.items.push(localStorageService.get(lsKeys[i]));
        }
    });

    $scope.arrayEmpty = function(){
        if($scope.items.length == 0 )
            return true;
    };

    $scope.show = function(id){
        $location.url('/address/' + id);
    };

  });
    	
