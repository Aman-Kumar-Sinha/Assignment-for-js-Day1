// a = 100
// b = 20
// sum = a + b 
// sub = a - b
// div = a % b
// mul = a * b

// console.log("addition of",a,"and",b,"is",sum)
// console.log("Subtraction of",a,"and",b,"is",sub)
// console.log("division of",a,"and",b,"is",div)
// console.log("multiplication of",a,"and",b,"is",mul)

const operator = prompt('Enter operator(either +, -, *, %): ');
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+'){
    result = number1 + number2;
}
else if (operator == '-'){
    result = number1 - number2;
}
else if (operator == '*'){
    result = number1 * number2;
}
else{
    result = number1 % number2;
}
 console.log(`${number1} ${operator} ${number2} = ${result}`);