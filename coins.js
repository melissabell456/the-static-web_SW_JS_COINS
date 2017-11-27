// Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.
console.log("test");
/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (dollarAmount) {
    // Initialize a JavaScript object to hold the coins
    var coinPurse = {
        quarters: 4,
        dimes: 10,
        nickels: 20,
        pennies: 100
    };
    var dollarAmount;
    var quarters = Math.floor(dollarAmount / .25);
    var leftoverFromPrevious = dollarAmount % .25; 
    var dimes = Math.floor(leftoverFromPrevious / .10);
    leftoverFromPrevious = leftoverFromPrevious % .10; 
    var nickels = Math.floor(leftoverFromPrevious / .05);
    leftoverFromPrevious = leftoverFromPrevious % .05;
    var pennies = Math.ceil(leftoverFromPrevious / .01);
    // leftoverFromPrevious = leftoverFromPrevious % .01;

    coinPurse.quarters = quarters;
    coinPurse.dimes = dimes;
    coinPurse.nickels = nickels;
    coinPurse.pennies = pennies;
    
    console.log("test2");
    console.log("Coins present:" + " " + "Quarters:" + " " + coinPurse.quarters + " " + "Dimes:" + " " + coinPurse.dimes + " " + "Nickels:" + " " + coinPurse.nickels + " " + "Pennies:" + " " + coinPurse.pennies);
    return coinPurse;
  };
  
  coinCounter(10.00);

  // calculation ideas
// var totalAmount = 1.55;
// var totalQuarters = totalAmount / .25;
// var leftovers =  totalAmount % .25;
// console.log(totalQuarters - leftovers);
// console.log(leftovers);

