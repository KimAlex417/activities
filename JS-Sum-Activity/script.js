function addNumbers(a, b) {
    return a + b;
}

// Get user input
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

// Calculate sum
let sum = addNumbers(num1, num2);

// Display result in an alert
alert("The sum is: " + sum);
