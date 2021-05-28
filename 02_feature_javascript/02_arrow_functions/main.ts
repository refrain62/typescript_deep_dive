import { ADDRCONFIG } from "dns";

class Adder {
  constructor( public a: number ){}

  // this function is now safe to pass around
  add = ( b: number ): number => {
    return this.a + b;
  }
}

class ExtendedAdder extends Adder {
  // create a copy of parent before creation our own
  private superAdd = this.add;

  // now create our override
  add = (b: number): number => {
    return this.superAdd( b );
  }
}


var adder = new ExtendedAdder( 100 );

let res = adder.add( 200 );

console.log( adder.a );   // 100
console.log( res );       // 300
