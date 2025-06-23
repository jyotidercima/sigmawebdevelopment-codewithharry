/*Question: Create a faulty calculator using Javascript

this faulty calculator does following:
1. It takes two numbers as input from the user
2. It perform wrong operations as follows:

+ -- > -
* --> +
- --> /
/ -->**

It perform wrong operations 10% of times
 */

//my coding solution:
/*
function calculate(a, b, operation) {
    let rand = Math.random() < 0.1;
    let operend = 0;
    if (rand === true) {
        switch (operation) {
            case "+":
                operend = a - b;
                break;
            case "*":
                operend = a + b;
                break;
            case "-":
                operend = a / b;
                break;
            case "/":
                operend = a ** b;
                break;
        }
        return operend;
    } else {
        switch (operation) {
            case "+":
                operend = a + b;
                break;
            case "*":
                operend = a * b;
                break;
            case "-":
                operend = a - b;
                break;
            case "/":
                operend = a / b;
                break;
        }
        return operend;
    }
}
console.log(calculate(8, 4, "-"));
console.log(calculate(10, 2, "+"));
*/

// code with harry solution:

let random = Math.random();
let a = prompt("Enter first number: ")
let b = prompt("Enter second number: ")
let c = prompt("Enter Operation: ")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}
console.log(random)
if (random > 0.1) {
    //perform right calculation
    console.log(`the answer is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
} else {
    //perform wrong calculation
    c = obj(c);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
