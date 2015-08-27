//app.js
(function() { //IIFE
//Where do you start? Maybe with an angular.module?
  angular
    .module('peopleApp', [])
    .factory("$MyFactory", myFactory)
    .controller('PeopleController', peopleController);

    //inject dependencies
    myFactory.$inject = ["$http"];
    //inject dependencies in controller
    peopleController.$inject = ["$MyFactory"];

    //factory function to get hoisted
    function myFactory($http) {
      var allPeopleUrl = "http://glenndama.herokuapp.com/api/people?limit=5";
      var peopleFactory = {};

      peopleFactory.getFivePeople = function (people) {
        return $http.get(allPeopleUrl);
      }

      return peopleFactory;
    }

    //people controller to get hoisted
    function peopleController($MyFactory) {
      var vm = this;
      vm.people;
      vm.api = $MyFactory;

      vm.api.getFivePeople()
        .success(function (data) {
          vm.people = (data)
        })

      // //get all people
      // $http.get("http://glenndama.herokuapp.com/api/people?limit=5")
      //   .success(function (data) {
      //     vm.people = (data);
      //     console.log(vm.people);
      //   })
    }//End peopleController
})();//End IIFE
