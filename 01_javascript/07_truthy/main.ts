// 値を他のものに移す
const hasName = !!name;

// オブジェクトのメンバとして利用する
const someObj = {
  hasName: !!name
}

// ex) ReactJs JSX
//{ !!someName && <div> {someName}</div> }

// if( !!someObj.hasName && someObj.hasName )
// {
//   console.log('truthy');
// }
// else
// {
//   console.log('falsy');
// }