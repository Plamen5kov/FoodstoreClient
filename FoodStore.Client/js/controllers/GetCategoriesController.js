'use strict';

foodstoreApp.controller('GetCategoriesController',
    function GetCategoriesController($scope, foodstoreData ) {

        foodstoreData.getCategories()
        .then(function (data, headers) {
            console.log(data);
            $scope.categories = data;
        });
    }
);