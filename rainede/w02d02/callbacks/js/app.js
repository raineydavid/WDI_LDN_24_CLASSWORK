var CallbackLesson = CallbackLesson || {};
//if exists already use it or create a new object

CallbackLesson.loaded = function loaded(){
  console.log(this);

  var hello = document.getElementById('hello')
  hello.addEventListener('click',this.clicked);
};

CallbackLesson.clicked = function clicked(){
  console.log(this, 'was clicked');
};

document.addEventListener('DOMContentLoaded', CallbackLesson.loaded.bind(CallbackLesson));

// console.log("macfintosh");
//
// function capitalise(word){
//   return word.charAt(0).toUpperCase() + word.toLowerCase().splice(1);
// }
//
// function greet(name, callback){
//   console.log('Hello' + callback(name));
// }
//
// greet('alex', capitalise);
