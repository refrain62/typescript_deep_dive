var rect = { x: 0, y: 10, width: 15, height: 20 };

// 分割代入
var {x, y, width, height} = rect;
console.log(x, y, width, height); // 0,10,15,20

rect.x = 10;
({x, y, width, height} = rect); // 外側のカッコで囲み、既存の変数に代入
console.log(x, y, width, height); // 10,10,15,20
