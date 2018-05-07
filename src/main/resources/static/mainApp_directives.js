mainApp.directive("helloWorld", function() {
    return {
        templateUrl : "helloWorldTemplate.html"
    };
});

mainApp.directive("getDatabase", function(){
    return {
    restrict: 'E',
        templateUrl:"databaseDirective.html"
    }
})
