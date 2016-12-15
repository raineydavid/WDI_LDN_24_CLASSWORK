function foo() {
  console.log( this.a );
}

var obj = {
  a: 2
};

foo.call( obj ); // 2

//changing the value of this by using a special method called call
//can also use bind, apply
