"use strict";
// --downlevelIteration オプションをつければコンパイルが通るようになる
// 
// tsconfig.json
// {
//     "compilerOptions": {
//         "downlevelIteration": true,
//         "target": "es5"
//     }
// }
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
var Fib = /** @class */ (function () {
    function Fib(maxValue) {
        this.maxValue = maxValue;
        this.fn1 = 0;
        this.fn2 = 1;
    }
    Fib.prototype.next = function () {
        var current = this.fn1;
        this.fn1 = this.fn2;
        this.fn2 = current + this.fn1;
        if (this.maxValue != null && current >= this.maxValue) {
            return {
                done: true,
                value: null
            };
        }
        return {
            done: false,
            value: current
        };
    };
    Fib.prototype[Symbol.iterator] = function () {
        return this;
    };
    return Fib;
}());
var fib = new Fib();
fib.next(); //{ done: false, value: 0 }
fib.next(); //{ done: false, value: 1 }
fib.next(); //{ done: false, value: 1 }
fib.next(); //{ done: false, value: 2 }
fib.next(); //{ done: false, value: 3 }
fib.next(); //{ done: false, value: 5 }
var fibMax50 = new Fib(50);
console.log(Array.from(fibMax50)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
var fibMax21 = new Fib(22);
try {
    for (var fibMax21_1 = __values(fibMax21), fibMax21_1_1 = fibMax21_1.next(); !fibMax21_1_1.done; fibMax21_1_1 = fibMax21_1.next()) {
        var num = fibMax21_1_1.value;
        console.log(num); // prints fibonacci sequence 0 to 21
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (fibMax21_1_1 && !fibMax21_1_1.done && (_a = fibMax21_1.return)) _a.call(fibMax21_1);
    }
    finally { if (e_1) throw e_1.error; }
}
