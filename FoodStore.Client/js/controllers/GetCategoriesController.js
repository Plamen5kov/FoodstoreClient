'use strict';

foodstoreApp.controller('GetCategoriesController',
    function GetCategoriesController($scope, foodstoreData) {

        $scope.hide = true;
        $scope.showMoreInfo = showMoreInfo;

        function showMoreInfo(click) {
            if ($scope.hide === true) {
                $scope.hide = false;
            }
            else {
                $scope.hide = true;
            }
        }

        foodstoreData.getCategories()
        .then(function (data, headers) {
            $scope.categories = data;
        });
    }
);