var app=angular.module("userData",['ui.router']);

/**********************************************************
Routing
**********************************************************/

app.config(['$locationProvider','$stateProvider','$urlRouterProvider',function($locationProvider,$stateProvider, $urlRouterProvider)
{
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/user');
    
    $stateProvider
    
    .state('user',{ url: '/user', templateUrl: 'user.html'})
    .state('userProfile',{ url: '/userProfile', templateUrl: 'userProfile.html'})
    .state('userEditProfile',{ url: '/userProfile', templateUrl: 'editUserProfile.html'})

}]); 

/**********************************************************
Controllers
**********************************************************/

app.controller('userData', function ($scope, $http, $state) 
{
    $scope.userData = [];
    $scope.userProfileData ={};
    $scope.updatedProfile = {};
    $http.get("/user")
        .success(function(data) {
            // console.log("user", data);
            $scope.userData = data;
        })
        .error(function(err) {
            alert("error");
            console.log(err);
        });
    $scope.userProfile = function(user) {
        $scope.userProfileData = user;
        // console.log("user data", $scope.userProfileData);
        $state.go("userProfile");
    };
    $scope.editProfile = function() {
        $state.go("userEditProfile");
    };
    $scope.cancel = function() {
        $state.go("userProfile");
    };
    $scope.saveProfile = function(userProfileData) {
        $scope.updatedProfile = userProfileData;
        // console.log("updated profile", $scope.updatedProfile);
        $http.put("/user", $scope.updatedProfile)
            .success(function(data) {
                for (var i = 0; i < $scope.userData.length; i++) {
                    if ($scope.userData[i]._id === userProfileData._id) {
                        console.log("index", i);
                        $scope.userData[i] = angular.copy(userProfileData);
                    }
                };
                // console.log("Updated user", data);
                $state.go("user");
                $scope.userProfileData ={};
            })
            .error(function(err) {
                alert("error");
                console.log(err);
            });
    };
});