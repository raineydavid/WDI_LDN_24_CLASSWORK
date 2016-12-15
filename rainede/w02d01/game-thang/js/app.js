/*
- make a grid
-  make a sequence of a certain length
- light up the squares within a certain tine
- record user input
- check if sequence is what user entered
- display result
- start again with harder sequence
*/


var Game = Game || {};

// sequence
Game.sequence       = [];
// guess
Game.guess          = [];
// grid size
// Game.gridWidth      = 4;
// Game.gridHeight     = 4;
Game.gridBase        = 4;
// numberInSequence
Game.sequenceLength  = 4;

Game.width = 400;

Game.createGrid = function(){
  var body = document.getElementsByTagName('body')[0];
  var grid  = document.createElement('ul');
  body.appendChild(grid);
  console.log('Making grid');
  for (var i =0; i < Game.gridBase*Game.gridBase; i++){
    var square = document.createElement('li');
    square.style.width = Game.width/Game.gridBase + 'px';
    square.style.height = Game.width/Game.gridBase + 'px';
    grid.appendChild(square);
  }
  Game.chooseSequence();
};

Game.chooseSequence = function() {
  for (var i = 0; i < Game.sequenceLength; i++){
    Game.sequence.push(Game.randomSequenceNumber());
  }
  console.log(Game.sequence);
  Game.lightUp();
};

Game.randomSequenceNumber = function(){
  return Math.round(Math.random() * (Game.gridBase * Game.gridBase));

};

Game.lightUp = function() {
  var squares = document.getElementsByTagName('li');
  for (var i =0; i <Game.sequence.length; i++){
    squares[Game.sequence[i]].className = 'light';
  }

};
Game.start = function() {
  // console.log('Hello I\'ve started' );
  Game.createGrid();
};

document.addEventListener('DOMContentLoaded', Game.start);
