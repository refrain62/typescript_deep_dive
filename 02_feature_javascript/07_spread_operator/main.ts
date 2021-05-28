const foo = {a: 1, b: 2, c: 0};
const bar = {c: 1, d: 2};
/** `foo`と`bar`を結合します */
const fooBar = {...foo, ...bar};
// `fooBar`はこのようになります: {a: 1, b: 2, c: 1, d: 2}

console.log( fooBar );

