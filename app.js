const result = document.querySelector('.result');

let inputNum = prompt('Enter a number, please.', '');
let factorialResult,
    fibanacciResult;


if (inputNum === "") {
    inputNum = prompt('Input cannot be empty!', '');
    factorialResult = factorial (inputNum);
    fibanacciResult = fib(inputNum);

} else {
    factorialResult = factorial (inputNum);
    fibanacciResult = fib(inputNum);
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
const p = document.createElement('p');
p.setAttribute("style", "color:white; font-size: 50px; margin: 0 auto;");
p.appendChild(document.createTextNode('The factorial result of your number is: ' + factorialResult +
' and the fibonacci result of your number is: ' + fibanacciResult));
result.appendChild(p);
