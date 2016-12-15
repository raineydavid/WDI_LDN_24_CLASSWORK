$(function(){
  // var lis = document.getElementsByTagName('li');
  //
  // for (var i =0; i <lis.length; i++){
  //   lis[i].addEventListener('click', function() {
  //     alert('I\'ve been clicked');
  //   });
  // }

 .addEventListener('click', function(){});
 .on('click', function(){})

  $('li').on('click', function(){
    alert('i\'ve been clicked');
  });
});


var lis = document.getElementsByTagName('li');

for (var i =0; i <lis.length; i++){
  var $lis= $(this).parent()children();
    $lis[i].fadeOit(300 * i +1);;
    alert('I\'ve been clicked');
  });
}
