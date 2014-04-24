(function (cache) {

    var memoryCache = require('node-memory-cache');

    var createCacheSession = function (message) {
        return {
            sessionId: message.sessionId,
            logs: []
        };
    };

    cache.appendToSession = function (message) {
        var foundCache = cache.getSession(message);

        foundCache.logs.push(message.body);

        memoryCache.set(message.sessionId, "ObjectProperty", foundCache);
        
        return foundCache;
    };

    cache.getSession = function(message) {
        var foundCache = memoryCache.get(message.sessionId, "ObjectProperty");

        if (!foundCache) {
            foundCache = createCacheSession(message);
        }

        return foundCache;
    };

    cache.init = function() {
        

        return cache;
    };

})(module.exports);

