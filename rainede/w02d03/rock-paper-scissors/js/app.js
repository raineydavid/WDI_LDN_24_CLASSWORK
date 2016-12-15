var Game = Game || {};

Game.addListeners= function addListeners(){
  console.log(this);
};

//There should only be one of these in a file
document.addEventListener('DOMContentLoaded', Game.addListeners.this(Game));
