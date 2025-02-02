// Task 1: If Statements

// Declare variable purchaseAmount
let purchaseAmount = 230;

// Use if statement to apply a 10% discount if the amount is greater than $100
if (purchaseAmount > 100) {
    purchaseAmount *= 0.9; 
}

// Log the final amount
console.log(`Final amount after discount: $${purchaseAmount}`);


// Task 2: For Loop

// Declare an array sales with five sales figures
let sales = [12, 76, 89, 100, 23];

// Use for loop to calculate the total sales
let totalSales = 0; // Initialize totalSales variable
for (let i = 0; i < sales.length; i++) { 
    totalSales += sales[i];
}

// Log the total sales 
console.log(`Total Sales: $${totalSales}`);


// Task 3: While Loop

// Declare variable stock with an initial value of 10
let stock = 10;

// Use while loop to decrease stock until it reaches zero
while (stock >= 0) {
    console.log(`Stock remaining: ${stock}`); // Log each decrement
    stock --; // Decrement stock by 1
}


// Task 4: Do...While Loop

// Declare variable responses with an initial value of zero
let responses = 0;

// Use do...while loop to collect responses
do {
   console.log(`Number of reponses: ${responses}`); // Log current response count
   responses++; // Simulate user input with responses++
} while (responses < 3); // Loop runs until responses reach 3


// Task 5: For...In Loop

// Declare object employee
const employee = {name: "Alice", position: "Manager", salary: 75000};

// Use a for...in loop to iterate through the object properties
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`); // Log each property and value
}


// Task 6: For...Of Loop

// Declare array products 
const products = ["Ice cream", "Chocolate bar", "Candy bar"];

// Use a for...of loop to display each product
for (let product of products) {
    console.log(`Product name: ${product}`); // Log each product name
}


// Task 7: forEach() Method

// Declare array orders
const orders = [101, 102, 103];

// Use the forEach() method to log each order ID
orders.forEach(order => console.log(`Order ID: ${order}`)); 


// Task 8: Function Declaration

// Write a function calculateTax that takes an amount and tax rate 
function calculateTax(amount, taxRate) {
    return (amount*taxRate)/100; // Return the calculated tax
} 

// Log the calculated tax result with amount = $23 and taxRate = 8%
console.log(`Tax amount: $${calculateTax(23, 8)}`); 

