Function.prototype.defer = function(ms, ...args) {
    timeoutID = setTimeout(this, ms, ...args)
}

let funz = function(a, b) {
    console.log(a, b);
}

funz.defer(2000, "buongiorno", "buonasera");
