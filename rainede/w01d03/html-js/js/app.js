// var answer = prompt('Do you like maltesers?');
// alert(answer);
//
// Plan
// Magic 8 Ball
// list of answers - funny
// prompt
// random to select answers
var yourquestion = prompt('What question would you like me to answer for you today?');
var answers = ['Hell no!', 'Hell yes!', 'In your dreams!',
  'Maybe!', 'Certainly not', 'No', 'Yes!'];

alert('You asked me: ' +yourquestion + '?'+ ', '+ 'The answer is ' + answers[Math.floor(Math.random() * answers.length)]);
