class FooBase {
  public x: number;
  private y: number;
  protected z: number;
}

// インスタンスにおける効果
var foo = new FooBase();

foo.x;    // Okay
foo.y;    // Error: private
foo.z;    // Error: protected

// サブクラスにおける効果
class FooChild extends FooBase {
  constructor() {
    super();

    this.x;   // Okay
    this.y;   // Error: private
    this.z;   // Okay
  }
}