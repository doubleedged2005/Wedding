/**
 * Created by Briana on 10/4/15.
 */
var app = angular.module('Wedding', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .when('/add-guest', {
            templateUrl: 'partials/guest-form.html',
            controller: 'AddGuestCtrl'
        })
        .when('/guest-list', {
            templateUrl: 'partials/guestlist.html',
            controller: 'HomeCtrl'
        })
        .when('/new-home', {
            templateUrl: '/',
            controller: 'AddGuestCtrl'
        })
        .when('/success', {
            templateUrl: 'partials/success.html',
            controller: 'AddGuestCtrl'
        })
        .otherwise({
            redirectTo: '/newHome.html'
        });
}]);

app.controller('HomeCtrl', ['$scope', '$resource',
    function($scope, $resource){
        var WeddingGuests = $resource('/api/WeddingGuests');
        WeddingGuests.query(function(WeddingGuests){
            $scope.WeddingGuests = WeddingGuests;
        })
    }
]);

app.controller('AddGuestCtrl', ['$scope', '$resource', '$location',
  function($scope, $resource, $location) {
      $scope.save = function () {
          var WeddingGuests = $resource('/api/weddingguests');
          WeddingGuests.save($scope.guest, function () {
            $location.path('success');
          });
      };
  }]);


