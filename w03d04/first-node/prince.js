var name ='Prince Rogers Nelson';
var ukNumber1s =1;
var favouriteColor = 'purple';
var height ='short';

var whisper = 'If I had a harem baby ...';

function sing(){
  return whisper;
}


// adding prince to give name space incase
module.exports = {
  name: name,
  ukNumber1s: ukNumber1s,
  favouriteColor: favouriteColor,
  height: height,
  sing: sing
};

// module.exports.favouriteColor =favouriteColor;
// module.exports.height = height;
