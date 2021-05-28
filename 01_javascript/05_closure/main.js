"use strict";
function createCounter() {
    var val = 0;
    return {
        increment: function () {
            val++;
        },
        getVal: function () {
            return val;
        }
    };
}
var counter = createCounter();
counter.increment();
console.log(counter.getVal()); // 1
counter.increment();
console.log(counter.getVal()); // 1
