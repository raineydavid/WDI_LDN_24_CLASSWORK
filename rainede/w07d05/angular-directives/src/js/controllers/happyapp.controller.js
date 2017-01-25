angular
  .module('happyApp')
  .controller('HappyAppCtrl', HappyAppCtrl);

HappyAppCtrl.$inject =[];

function HappyAppCtrl(){
  const vm = this;

  vm.emotion = [
    { rating: 1, img: ''},
    { rating: 2, img:''},
    {rating: 3 , img: '' }
  ];

  vm.addEmotion = addEmotion;

  function addEmotion(emotion){
    vm.emotion.push(emotion);
  }

}
