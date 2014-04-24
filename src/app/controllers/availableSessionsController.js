"use strict";

// using the full syntax to make jshint happy
angular.module('realtimeLoggerApp').controller('availableSessionsController', function ($scope) {
    
        var sessions = [];
        sessions.push({ name: "something 1" });
        sessions.push({ name: "something 2" });
        sessions.push({ name: "something 3" });

        $scope.sessions = sessions;
    });