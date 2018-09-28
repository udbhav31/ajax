var getTodoList = function (url) {
    var deferred = $q.defer();
    var data = [
        {
            "task": "I wanna to learn Web-Worker...",
            "stared": "nopes!!: (",
            "estimatedTime": "Infinity"
        },
        {
            "task": "I wanna to learn Monkey-Patching...",
            "stared": "Yup!!!",
            "estimatedTime": "1day"
        },
        {
            "task": "I wanna to learn ui-router",
            "stared": "nopes!!: (",
            "estimatedTime": "99999hr"
        }
    ];
    var percentage = 0;
    var interval = $interval(function () {
        percentage = percentage + 5;
        deferred.notify({percentage: percentage});
        if (percentage > 99) {
            $interval.cancel(interval);
            deferred.resolve(data)
        }
 
    }, 500)
    return deferred.promise;
}      