
// ------------------------------
// 基本アノテーション
// ------------------------------
var num: number = 123;

function identity( num: number ): number {
    return num;
}


// ------------------------------
// プリミティブ型(Primitive Types)
// ------------------------------
var num: number;
var str: string;
var bool: boolean;

num = 123;
num = 123.456;
num = '123';        // error

str = '123';
str = 123;          // error

bool = true;
bool = false;
bool = 'false';     // error


// ------------------------------
// 配列(Arrays)
// ------------------------------
var boolArray: boolean[];

boolArray = [true, false];
console.log( boolArray[0] );        // true
console.log( boolArray.length );    // 2

boolArray[1] = true;
boolArray = [ false, false ];

boolArray[0] = 'false';         // error
boolArray = 'false';            // error
boolArray = [ true, 'false' ];  // error


// ------------------------------
// インターフェース(Interfaces)
// ------------------------------
interface Name {
    first: string;
    second: string;
}

var names: Name;

names = {
    first: 'John',
    second: 'Doe'
};

names = {                // Error
    first: 'John'
};

names = {                // Error
    first: 'John',
    second: 1337
};


// ------------------------------
// インライン型アノテーション(Inline Type Annotation)
// ------------------------------
var names: {
    first: string;
    second: string;
};

names = {
    first: 'John',
    second: 'Doe'
};

names = {               // error
    first: 'Jhon'
};

names = {               // Error
    first: 'John',
    second: 1337
}


// ------------------------------
// 特殊な型 - any
// ------------------------------
var power: any;

// Takes any and all types
power = '123';
power = 123;

// Is compatible with all types
var num: number;
power = num;
num = power;


// ------------------------------
// 特殊な型 - nullとundefined
// ------------------------------
var num: number;
var str: string;

// These literals can be assigned to anything
num = null;
str = undefined;


// ------------------------------
// 特殊な型 - :void
// ------------------------------
function log( message ): void {
    console.log( message );
}


// ------------------------------
// ジェネリックス(Generics)
// ------------------------------
function reverse<T>(items: T[]): T[] {
    var toreturn = [];

    for( let i = items.length - 1; i >= 0; i-- ) {
        toreturn.push( items[ i ] );
    }

    return toreturn;
}

var sample = [1, 2, 3];
var reversed = reverse( sample );
console.log( reversed );            // 3, 2, 1

// safety!
reversed[0] = '1';          // Error
reversed = ['1', '2'];      // Error

reversed[0] = 1;            // Okay
reversed = [1, 2];          // Okay


var strArr = ['1', '2'];
var reversedStrs = reverse(strArr);

reversedStrs = [1, 2]; // Error!

var numArr = [1, 2];
var reversedNums = numArr.reverse();

reversedNums = ['1', '2']; // Error!


// ------------------------------
// ユニオン型(Union Type)
// ------------------------------
function formatCommandline( command: string[] | string ) {
    var line = '';

    if( typeof command === 'string' ) {
        line = command.trim();
    }
    else
    {
        line = command.join( ' ' ).trim();
    }

    // Do stuff width line: string
}

// ------------------------------
// 交差型(Intersection Type)
// ------------------------------
function extend<T, U>( first: T, second: U ): T & U {
    return { ...first, ...second };
}

const x = extend({ a: "hello" }, { b: 42 });

// x now has both 'a' and 'b'
const a = x.a;
const b = x.b;


// ------------------------------
// タプル型
// ------------------------------
var nameNumber: [string, number];

// Okay
nameNumber = [ 'jenny', 8675309 ];

// Error
nameNumber = [ 'jenny', '867-5309' ];

var nameNumber: [string, number];
nameNumber = ['Jenny', 8675309];

var [name, num] = nameNumber;


// ------------------------------
// 型エイリアス(Type Alias)
// ------------------------------
type StrOrNum = string | number;

// Usage: just like any other notation
var sample: StrOrNum;
sample = 123;
sample = '123';

// Just checking
sample = true;          // Error

type Text = string | { text: string };
type Coordinates = [number, number];
type Callback = (data: string) => void;




