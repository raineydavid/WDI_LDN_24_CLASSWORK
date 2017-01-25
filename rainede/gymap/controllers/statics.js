const path = require('path');
// this route has nothing to do with the Gym Resource, nothing to do with RESTful resource and go to a static cintroller
function staticsHome(req,res){
  return res.sendFile(path.join(__dirname, '../index.html'));
}

  module.exports ={
    home: staticsHome
  }
