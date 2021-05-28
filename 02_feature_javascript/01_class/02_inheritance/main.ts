class Point {
  x: number;
  y: number;

  constructor( x: number, y: number ) {
    this.x = x;
    this.y = y;
  }

  add( point: Point ) {
    return new Point( this.x + point.x, this.y + point.y );
  }
}

class Point3D extends Point {
  z: number;

  constructor( x: number, y: number, z: number ) {
    super( x, y );
    this.z = z;
  }

  add ( point: Point3D ) {
    var point2D = super.add( point );
    return new Point3D( point.x, point.y, this.z + point.z )
  }
}


var p1 = new Point3D( 0, 10, 20 );

console.log( `x:${ p1.x }, y:${ p1.y }, z:${ p1.z }` );

var p2 = new Point3D( 10, 20, 30 );

console.log( `x:${ p2.x }, y:${ p2.y }, z:${ p2.z }` );

var p3 = p1.add( p2 );        // {  x:10, y:30 }

console.log( `x:${ p3.x }, y:${ p3.y }, z:${ p3.z }` );
