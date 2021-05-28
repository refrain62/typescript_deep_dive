type IdDisplay = {
  id: string,
  dispaly: string
}

const list: IdDisplay[] = [
  {
    id: 'foo',
    dispaly: 'Foo Select'
  },
  {
    id: 'bar',
    dispaly: 'Bar Select'
  }
]

const fooIndex = list.map( i => i.id ).indexOf( 'foo' );

console.log( fooIndex );
