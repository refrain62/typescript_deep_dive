// ----------------------------------------
// 無限リスト
// ----------------------------------------
function* infiniteSequence() {
    var i = 0;
    while(true) {
        yield i++;
    }
}

let idx: number = 0;
var iterator = infiniteSequence();
while (true) {
    console.log(iterator.next()); // { value: xxxx, done: false } forever and ever

    if( idx > 100) {
        break;
    }

    idx++;
}

// ----------------------------------------
// 無限リスト
// ----------------------------------------
function* idMaker(){
    let index = 0;
    while(index < 3)
      yield index++;
  }
  
  let gen = idMaker();
  
  console.log(gen.next()); // { value: 0, done: false }
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next()); // { value: 2, done: false }
  console.log(gen.next()); // { done: true }


// ----------------------------------------
// ジェネレータ関数の外部制御
// 次のエラーの回避のために　tsconfig.json に以下の設定が必要です。
// （error TS7057: 'yield' expression implicitly results in an 'any' type because its containing generator lacks a return-type annotation.）
//   "noImplicitAny": false, 
// ----------------------------------------
function* generator(){
    console.log('Execution started');
    yield 0;
    console.log('Execution resumed');
    yield 1;
    console.log('Execution resumed');
}

var iterator2 = generator();
console.log('Starting iteration'); // これはジェネレータ関数の本体の前に実行されます
console.log(iterator2.next()); // { value: 0, done: false }
console.log(iterator2.next()); // { value: 1, done: false }
console.log(iterator2.next()); // { value: undefined, done: true }



function* generator2() {
    var bar = yield 'foo';
    console.log(bar); // bar!
}

const iterator3 = generator2();
// 最初に`yield`された値を取得するまで実行する
const foo = iterator3.next();
console.log(foo.value); // foo
// `bar`を注入して処理を再開する
const nextThing = iterator3.next('bar');
