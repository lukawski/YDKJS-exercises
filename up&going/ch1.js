/*
Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
Finally, check the amount against your bank account balance to see if you can afford it or not.
You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!
*/

var TAX_RATE = 0.05;
var PHONE_PRICE = 109.99;
var ACCESSORY_PRICE = 15.99;
var SPENDING_TRESHOLD = 300;

function calculateAmountWithTax(price, tax) {
  return price + (price * tax);
}

function formatOutput(output) {
  return '$' + output.toFixed(2);
}

var amount = 0;

var accountBalance = Number(prompt('What is your account balance?'));

while(Number.isNaN(accountBalance)) {
  accountBalance = Number(prompt('Enter the correct number'));
}

while (accountBalance > amount) {
  amount += PHONE_PRICE;

  if (amount < SPENDING_TRESHOLD) {
    amount += ACCESSORY_PRICE;
  }
}

amount = calculateAmountWithTax(amount, TAX_RATE);

console.log('Amount: ' + formatOutput(amount));

if (amount > accountBalance) {
  console.log('You can\'t afford this, sry m8');
} 
