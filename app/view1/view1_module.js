'use strict';

angular.module('myApp.view1', ['ngRoute'])
    .config(initView);

    initView.$inject = ["$routeProvider"];

    function initView($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }