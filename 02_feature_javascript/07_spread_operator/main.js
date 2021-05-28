"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var foo = { a: 1, b: 2, c: 0 };
var bar = { c: 1, d: 2 };
/** `foo`と`bar`を結合します */
var fooBar = __assign(__assign({}, foo), bar);
// `fooBar`はこのようになります: {a: 1, b: 2, c: 1, d: 2}
console.log(fooBar);
