window.onload = start;
var counter = 0 ;
var winCounter = 0;
var XMoves = [];
var OMoves = [];

var winningCombinations =[[1,2,3], [4,5,6], [7,8,9],
                          [1,4,7], [2,5,8], [3,6,9]
                          [1,5,9], [3,5,7]                        ];
function start(){
  var cells = document.getElementsByTagName('li');
  addCellListener(cells);

}

function addCellListener(array){
  for (var i=0; i< array.length; i++) {
    array[i].addEventListener('click', addXorO);
  }
}

function addXorO(){
  var display = document.querySelector('#display');
  //  var display = document.querySelectorAll('#display');
  // or call   var display = document.getElementByID('#display');
  console.log(display);
  if (this.innerHTML.length === 0){
    if (counter % 2 === 0){
      OMoves.push(parseInt(this.getAttribute('id')));
      console.log(OMoves);
      this.setAttribute('class', 'O');
      display.innerHTML = 'X\'s Turn';
      checkForWin(OMoves,"O");
      //alternatives to setAttribute specific to class
      // this.className ='O'; or
      // this.classList.add('O');
    } else {
      XMoves.push(parseInt(this.getAttribute('id')));
      this.innerHTML ='X';
      this.setAttribute('class', 'X');
        display.innerHTML = 'O\'s Turn';
        checkForWin(OMoves,"X");
    }
counter++;
  }
}

function checkForWin(movesArray, player){
    console.log(movesArray,player);
    for (var i =0; i < winningCombinations.length, i++){
    winCounter = 0;
    for (var j =0; j < winningCombinations.length, j++){
      if (movesArray.indexOf(winningCombinations[i][j] ! == -1){
        winCounter++;
      }

      if (winCounter ==3){
        aleart('Game Over, ' + player + 'Wins!')
      }
    }
}
