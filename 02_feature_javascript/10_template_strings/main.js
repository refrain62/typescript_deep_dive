"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
function htmlEscape(literals) {
    var placeholders = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        placeholders[_i - 1] = arguments[_i];
    }
    var result = "";
    // プレースフォルダをリテラルに埋め込む
    for (var i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += placeholders[i]
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    // 最後のリテラルを追加する
    result += literals[literals.length - 1];
    return result;
}
var say = "手の中にある'一羽' > \"ヤブ\"&の中の二羽";
var html = htmlEscape(__makeTemplateObject(["<div> \u79C1\u306F\u3053\u306E\u3088\u3046\u306B\u8A00\u3044\u305F\u3044 : ", "</div>"], ["<div> \u79C1\u306F\u3053\u306E\u3088\u3046\u306B\u8A00\u3044\u305F\u3044 : ", "</div>"]), say);
console.log(say);
console.log(html);
