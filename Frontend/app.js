var app = angular.module('DevProfile.Frontend', ['ui.router', 'ngSanitize', 'ui.bootstrap', 'ngAnimate', 'ngMaterial', 'ngMessages']);

(function () {
    'use strict';

    app.config(function ($stateProvider, $urlRouterProvider, $qProvider) {
        $urlRouterProvider.otherwise('/welcome');
        $qProvider.errorOnUnhandledRejections(false);

        $stateProvider
            .state('/', {
                url: '/welcome',
                templateUrl: 'views/DevWelcome.html',
                controller: 'associateWelcomeCtrl'
            });

    });

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/welcome', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/welcome');
            }
        });
    }

})();