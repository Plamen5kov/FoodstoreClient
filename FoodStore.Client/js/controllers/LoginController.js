'use strict'

foodstoreApp.controller('LoginController',
    function LoginController($scope, foodstoreData) {
        $scope.login = function (user) {
            //console.log(user.email);
            foodstoreData.login(user)
            .then(function (data) {
                localStorage.setItem('Bearer', data.access_token);
            })
            .then(function () {
                window.location = '#/get-categories';
            })
        }
});