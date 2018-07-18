const TAX_RATE = 0.08;
const PHONE_PRICE = 600;
const ACCESSORY_PRICE = 50;
const SPENDING_THRESHOLD = 200;
const BANK_ACCOUNT_BALANCE = 1000;

var bank_balance = 303.91;
var amount = 0;

// Multiplying the amount with the TAX_RATE to calculate total tax
function calculateTax(amount) {
  return amount * TAX_RATE;
}

// Allows us to view the total amount from the integer value summed up after the function is ran in the format of what would be USD
function formatAmount(amount) {
  return "$" + amount.toFixed(2); // rounds the integer of amount to 2 decimal places aka hundredths place
}

// Loop to see if we can buy accessories w/out going over the bank account balance
while(amount < bank_balance) {
  // setting the value of amount to amount PLUS the phone price
  amount = amount + PHONE_PRICE;

  // If amount is less than the spending threshold than you can buy an accessory
  if (amount < SPENDING_THRESHOLD) {
    amount = amount + ACCESSORY_PRICE;
  }
}

// setting the amount to the amount PLUS the calculateTax(amount) function
amount = amount + calculateTax(amount);

// sums up total amount of purchase
console.log("Your purchase: " + formatAmount(amount));

// if the amount is greater then the bank_balance than you can't afford it. In other words, false
if (amount > bank_balance) {
  console.log("You broke, so you can't buy this. Get a job.");
}
