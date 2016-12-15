console.log('working');

document.addEventListener('DOMContentLoaded', function(){

  // audio.controls = 'controls';
  var button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', function(){
    var audio = document.getElementById('audio');
    console.log(audio);
    audio.src = 'http://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3';
    audio.play();
  });
});
