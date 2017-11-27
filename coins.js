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

// function coinCounter (totalAmount) {
//     // Initialize a JavaScript object to hold the coins
//     var coinPurse = {
//         quarters: 4,
//         dimes: 10,
//         nickels: 20,
//         pennies: 100
//     };
//     var totalAmount;
//     var totalQuarters = (totalAmount / .25) - (totalAmount % .25);
//     var totalDimes = 
//     var totalNicks = 
//     var totalPennies = 

//     coinPurse.quarters = totalQuarters;
//     coinPurse.dimes = totalDimes;
//     coinPurse.nickels = totalNicks;
//     coinPurse.pennies = totalPennies;
    
//     return coinPurse;
// }

// coinCounter(20.00);
//   console.log("Coins present:" + " " + coins);

var totalAmount = 1.55;
var totalQuarters = totalAmount / .25;
var leftovers =  totalAmount % .25;
console.log(totalQuarters - leftovers);
console.log(leftovers);