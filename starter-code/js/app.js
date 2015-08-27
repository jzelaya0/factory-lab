//app.js
(function() { //IIFE
//Where do you start? Maybe with an angular.module?
  angular
    .module('peopleApp', [])
    // .factory("$MyFactory", myFactory)
    .controller('PeopleController', peopleController);




    function peopleController($http) {
      var vm = this;
      vm.people;

      //get all people
      $http.get("http://glenndama.herokuapp.com/api/people?limit=5")
        .success(function (data) {
          vm.people = (data);
          console.log(vm.people);
        })
    }//End peopleController
})();//End IIFE
