console.log('working');

document.addEventListener('DOMContentLoaded', sound);

  }
});


/*
Add a play button HTML element
Add an eventListener to listen for the click of that button
Play the sound then that button has been clicked.
*/
function sound(){

 var play = document.getElementById('play');

 play.addEventListener('click'){
   //this.play();
 var audio = document.getElementById('audio', function(){
   audio.src = 'http://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3';
   // audio.play();
   audio.controls = 'controls';
 });
