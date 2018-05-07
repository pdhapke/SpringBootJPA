mainApp.factory('anUpdateService', function($rootScope) {
    var anUpdateService = {
    update: true
    };

    anUpdateService.check = function() {
        return this.update
    };
    anUpdateService.trigger = function(){
        this.update = true;
        this.broadcastStatus();
    }
    anUpdateService.reset = function() {
    this.update = false;
    }

    anUpdateService.broadcastStatus = function() {
        $rootScope.$broadcast('update_state_changed');
    };

    return anUpdateService;
});