mainApp.controller('mainCtrl', function($scope, $http, anUpdateService) {

    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.personAddress = "";
    $scope.personCity = "";
    $scope.personState = "";
    $scope.personZip = "";

    $scope.people = "/people";
    $scope.name = function(){
      return ($scope.firstName + " " + $scope.lastName); 
    }
    $scope.addToDataBase = function(){
       data = { fname : $scope.firstName,
                lname : $scope.lastName,
                address : $scope.personAddress,
                city : $scope.personCity,
                state : $scope.personState,
                zip : $scope.personZip
                }
       $http.post("/people",data).then(function(){
            anUpdateService.trigger();
         }
       )
    }


});


mainApp.controller('databaseController', function($scope, $attrs, $http, anUpdateService) {
    $scope.show = false;
    $scope.edit;
    $scope.update = function(){
         if($attrs.dburl!=null ){

                $scope.dbUrl = $attrs.dburl;

                    $http.get($scope.dbUrl).then(function(res) {
                        $scope.hateoasJSON = res.data;
                    });

            } else {
                $scope.dbUrl = "not yet set"
                $scope.hateoasJSON = {}
            }
    }
    $scope.$on('update_state_changed', function() {
        if(anUpdateService.check()){
             $scope.update()
             anUpdateService.reset();
        }
    });
    $scope.update();

    $scope.deleteFromDataBase = function(aPerson){
                                   $http.delete(aPerson._links.self.href).then(function(){
                                        anUpdateService.trigger();
                                     }
                                   )
                                }


    $scope.updateDataBase = function(aPerson){
                                       data = { fname : aPerson.fname,
                                                lname : aPerson.lname,
                                                address : aPerson.address,
                                                city : aPerson.city,
                                                state : aPerson.state,
                                                zip : aPerson.zip
                                                }
                                       $http.put(aPerson._links.self.href, data).then(function(){
                                            anUpdateService.trigger();
                                         }
                                       )
                                    }




});