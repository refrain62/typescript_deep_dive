"use strict";
//var name: string = 'test';
// 値を他のものに移す
var hasName = !!name;
// オブジェクトのメンバとして利用する
var someObj = {
    hasName: !!name
};
// ex) ReactJs JSX
//{ !!someName && <div> {someName}</div> }
if (!!someObj.hasName && someObj.hasName) {
    console.log('truthy');
}
else {
    console.log('falsy');
}
