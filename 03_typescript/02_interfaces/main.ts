
// ------------------------------
// インターフェース(Interfaces)
// ------------------------------

// sample A
declare var myPoint: { x: number; y: number; };

// sample B
interface Point {
    x:number; y: number;
}

declare var myPoint: Point;



// Lib a.d.ts
interface Point {
    x: number; y:number;
}

declare var myPoint: Point;

// Lib b.d.ts
interface Point {
    z: number;
}

// Your code
var myPoint.z;      // Allowed!



// ------------------------------
// クラスはインターフェースを実装できる
// ------------------------------
interface Point {
    x: number; y:number;
}

class MyPoint implements Point {
    x: number; y:number;            // same as point
}

interface Point {
    x: number; y:number;
    z: number;                      // new number
}

class MyPoint implements Point {    // Error: missing member z
    x: number; y: number;
}

var foo: Point = new MyPoint();



interface Crazy {
    new (): {
        hello: number
    };
}

class CrazyClass implements Crazy {
    constructor() {
        return { hello: 123 };
    }
}
// Because
const crazy = new CrazyClass(); // crazy would be {hello:123}

