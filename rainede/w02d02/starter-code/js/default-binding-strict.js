function foo() {
  "use strict";
  // window does not populate automatically

  console.log( this.a );
}

var a = 2;

foo(); // TypeError: `this` is `undefined`
