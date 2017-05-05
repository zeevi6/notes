// new Promise(function(resolve, reject) {});

function myPromise(func) {

    var callback = null;

    this.then = function(cb) {
        console.log("Now in then");
        callback = cb;
    };

    function resolve(value) {
        setTimeout(function() {
            console.log("Now in resolve");
            callback(value);
        }, 1);
    }

    func(resolve);

};

function doSomething() {
    debugger;
    console.log("I will doSomething");
    return new myPromise(function(resolve) {
        console.log("I'm a new myPromise");
        var value = 42;
        resolve(value);
    });
}

// use it!

doSomething().then(function(value) {
    console.log("Got a value, " + value);
});