/*

- Welcome user
- display a calculator with three inputs
  - a first number
  - a dropdown of operators
  - a second number
- The user will enter some information into the calculator
- When the user presses submit
  - Display the answer

*/

// window.onload = function(){
//
// }

document.addEventListener('DOMContentLoaded',start);

function start(){
  // console.log('I\'ve loaded');

  var form = document.getElementsByTagName('form')[0];
  // console.log(form);
  form.addEventListener('submit', formSubmit);
}

function formSubmit(e){
  e.preventDefault();
//  console.log('submitted');
  var firstNumber   = parseFloat(document.getElementById('firstNumber').value);
  var operator      = document.getElementById('operator');
  var secondNumber  = parseFloat(document.getElementById('secondNumber').value);

//  console.log(firstNumber, operator, secondNumber);


  switch (operator){
    case '+':
      displayAnswer(add(firstNumber, secondNumber));
      break;
    case '-':
      displayAnswer(subtract(firstNumber, secondNumber));
      break;
    case '*':
      displayAnswer(multiply(firstNumber, secondNumber));
      break;
    case '/':
      displayAnswer(divide(firstNumber, secondNumber));
      break;
    default:
      displayAnswer('Please try again');
      break;
  }
}

function add(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber){
  return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber){
  return firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber){
  return firstNumber / secondNumber;
}

function displayAnswer(answer){
  var display = document.getElementById('answer');
  display.innerHTML = answer;
}
