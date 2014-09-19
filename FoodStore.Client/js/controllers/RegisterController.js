'use strict';

foodstoreApp.controller('RegisterController',
    function RegisterController($scope, foodstoreData) {

        $scope.register = function (user) {
            //console.log(user.email);
            foodstoreData.register(user)
            .then(function (data) {
                console.log('registration successful');
            })
            .then(function () {
                window.location = '#/login-form';
            })
        }
    }
);