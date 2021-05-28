"use strict";
var list = [
    {
        id: 'foo',
        dispaly: 'Foo Select'
    },
    {
        id: 'bar',
        dispaly: 'Bar Select'
    }
];
var fooIndex = list.map(function (i) { return i.id; }).indexOf('bar');
console.log(fooIndex);
