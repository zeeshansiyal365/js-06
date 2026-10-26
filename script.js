
/* P1: Print All Even Numbers from 1 to 10 */

console.log("P1: Even Numbers");

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


/* P2: Multiplication Table of Prompted Value (Up to 10) */

console.log("P2: Multiplication Table");

let tableNum = Number(prompt("P2: Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}


/* P3: Sum of Numbers from a to b */

console.log("P3: Sum of Numbers");

let a = Number(prompt("P3: Enter starting number (a):"));
let b = Number(prompt("P3: Enter ending number (b):"));

let sum = 0;

for (let i = a; i <= b; i++) {
    sum += i;
}

console.log("Sum:", sum);


/* P4: Print Numbers from 10 Down to 1 */

console.log("P4: Countdown");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


/* P5: Print the Square of a Prompted Number */

console.log("P5: Square of a Number");

let squareNum = Number(prompt("P5: Enter a number:"));

let square = squareNum * squareNum;

console.log("Square:", square);


/* P6: Count Even and Odd Numbers Between Two Values */

console.log("P6: Count Even and Odd Numbers");

let start = Number(prompt("P6: Enter starting number:"));
let end = Number(prompt("P6: Enter ending number:"));

let evenCount = 0;
let oddCount = 0;

for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Even numbers count:", evenCount);
console.log("Odd numbers count:", oddCount);


/* P7: Calculate Factorial of a Prompted Number */

console.log("P7: Factorial");

let factorialNum = Number(prompt("P7: Enter a non-negative integer:"));

let factorial = 1;

if (!Number.isInteger(factorialNum) || factorialNum < 0) {
    console.log("Invalid input. Enter a non-negative integer.");
} else {
    for (let i = 1; i <= factorialNum; i++) {
        factorial *= i;
    }

    console.log(`Factorial of ${factorialNum}:`, factorial);
}


/* P8: Print a Triangle of Stars Using Loops */

console.log("P8: Star Triangle");

let rows = Number(prompt("P8: Enter the number of rows:"));

if (Number.isInteger(rows) && rows > 0) {
    for (let i = 1; i <= rows; i++) {
        let stars = "";

        for (let j = 1; j <= i; j++) {
            stars += "* ";
        }

        console.log(stars);
    }
} else {
    console.log("Please enter a positive whole number.");
}


/* P9: Print All Prime Numbers Between Two Values */

console.log("P9: Prime Numbers");

let primeStart = Number(prompt("P9: Enter starting number:"));
let primeEnd = Number(prompt("P9: Enter ending number:"));

if (
    Number.isInteger(primeStart) &&
    Number.isInteger(primeEnd) &&
    primeStart <= primeEnd
) {
    for (let num = Math.max(2, primeStart); num <= primeEnd; num++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(num);
        }
    }
} else {
    console.log("Please enter valid whole numbers in ascending order.");
}


/* P10: Print All Odd Numbers Between Two Values */

console.log("P10: Odd Numbers");

let oddStart = Number(prompt("P10: Enter starting number:"));
let oddEnd = Number(prompt("P10: Enter ending number:"));

for (let i = oddStart; i <= oddEnd; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
