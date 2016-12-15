function describe(description, callback){
  console.log(description);
  callback();

}

function it(description, callback){
  console.log(description);
  callback();
}

function expect(object){
  //expectation or an assertion library
  function log(result){
    if (!!result){
      console.log('%c' + "pass", 'color: green');
    } else {
      console.log('%c' + "fail", 'color: green');
    }
  }
  return {
    //factory function because it is returning an object
    toBe: function(condition){
      return console.log(object === condition);
    }

  }
}
// var a =2
// expect(a).toBe(2);

describe('These are the specs for a car object', function(){
  it('should exist',function(){
    expect(!!car).toBe(true);
  });
});
