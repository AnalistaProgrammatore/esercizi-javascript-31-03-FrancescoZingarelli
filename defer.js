Function.prototype.defer = function(ms, ...args) {
    return setTimeout(this, ms, ...args)
}



let logTwoArgs = function(a, b) {
    console.log(a, b);
}

let timeout = logTwoArgs.defer(2000, "buongiorno", "buonasera");
