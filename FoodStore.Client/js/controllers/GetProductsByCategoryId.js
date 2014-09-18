'use strict';

foodstoreApp.controller('GetProductsByCategoryId',
    function GetProductsByCategoryId($scope, foodstoreData) {

        $scope.someFunc = function () { };
        $scope.products = null;

        $scope.getProductsBy = function (category) {
            foodstoreData.getProductsByCategory(category)
                .then(function (data) {
                    console.log(data);
                    $scope.products = data;
                    //setTimeout(loadLater(data), 3000);
                });
            //.then(function () {
            //    window.location = '#/get-products-by-categoryId';
            //})
        }

        function loadLater(data){
            $scope.products = data;
        }
    });