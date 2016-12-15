document.addEventListener('DOMContentLoaded', start);

var firstNumber;
var operator;
var secondNumber;

function start(){
  var numbers     = document.getElementsByClassName('number');
  var operators   = document.getElementsByClassName('operator');
  var equals      = document.getElementsByClassName('=')[0];


  for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', setNumber);
  }

  for (var j = 0; j < operators.length; j++) {
    operators[j].addEventListener('click', setOperator);
  }
debugger;
  equals.addEventListener('click', calculate);
}

function setNumber(){
  var value = parseInt(this.value);
  updateDisplay(value);

  if (typeof firstNumber !== 'number') {
    firstNumber = parseInt(this.value);
  } else {
    secondNumber = parseInt(this.value);
  }
  console.log(firstNumber, operator, secondNumber);
}

function setOperator(){
  operator = this.value;
  console.log(firstNumber, operator, secondNumber);
}

function calculate(){
  var answer;
  switch (operator){
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '*':
      answer = firstNumber * secondNumber;
      break;
    case '/':
      answer = firstNumber / secondNumber;
      break;
  }
  updateDisplay(answer);
}

function updateDisplay(value){
  var display = document.getElementsByClassName('display')[0];
  display.value =value;
}
