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
