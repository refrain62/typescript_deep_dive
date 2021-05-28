
function htmlEscape( literals: TemplateStringsArray, ...placeholders: string[] ) {
  let result = "";

  // プレースフォルダをリテラルに埋め込む
  for( let i = 0; i < placeholders.length; i++ ) {
    result += literals[ i ];
    result += placeholders[ i ]
                  .replace(/&/g, '&amp;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#39;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  ;
  }

  // 最後のリテラルを追加する
  result += literals[ literals.length - 1 ];

  return result;
}

var say = "手の中にある'一羽' > \"ヤブ\"&の中の二羽";
var html = htmlEscape `<div> 私はこのように言いたい : ${say}</div>`;

console.log( say );
console.log( html );
