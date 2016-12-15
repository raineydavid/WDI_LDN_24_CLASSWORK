var DaftPunk = DaftPunk || {};

// use the filename to play the sound
DaftPunk.playSound = function(){
  console.log(this.fileName);
  new Audio('../sounds/' + this.fileName + '.wav').play();
};


// extract the filename from the clicked button's id attribute
DaftPunk.getFileName = function(e){
  e.preventDefault();
  console.log(e.target);
  this.fileName = e.target.dataid;
    console.log(e.target.dataid);
  this.playSound();
};

// Add event listeners for clicks
DaftPunk.addListeners = function(){
  console.log(this);
  var buttons = document.getElementsByTagName('a');
  for (var i=0; i < buttons.length; i++){
    buttons[i].addEventListener('mouseover', this.getFileName.bind(DaftPunk));
  }
};


window.onload = function(){
  DaftPunk.addListeners();
};
