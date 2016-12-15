var number = 7;

// module.exports.number = number;

module.exports ={
  number: number
};
//console.log(number);

module.exports = {
  number: number,
  hi: function() {
    console.log('Hi');
  }
};
