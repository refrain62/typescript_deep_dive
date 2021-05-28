function iTakeItAll( first: string, second: string, ...allOthers: string[] ) {
  console.log( allOthers );
}

iTakeItAll('foo', 'bar');                 // []
iTakeItAll('foo', 'bar', 'bas','qux');    // ['bas','qux']
