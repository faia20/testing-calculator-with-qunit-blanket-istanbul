var coins = [200, 100, 50, 20, 10, 5, 2, 1]
function getChange(totalPayable, cashPaid) {
  var change = [];
  var length = coins.length;
  var remaining = cashPaid - totalPayable;

  for (var i = 0; i < length; i++) {
    var coin = coins[i];

    if(remaining/coin >= 1){
      var times = Math.floor(remaining/coin);

      for(var j = 0; j < times; j++) {
        change.push(coin);
        remaining = remaining - coin;
      }
    }
  }

  return change;
};

/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}