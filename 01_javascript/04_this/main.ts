function foo() {
  console.log( this );
}

// グローバル値をログに出力します（例： ブラウザにおける `window`）
foo();

let bar = {
  foo
}

// `bar`がログに出力されます。なぜなら、`bar`に対して`foo`が呼び出されるからです
bar.foo();
