function calculate(num1, num2, operator) {

    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {

        if (num2 === 0) {
            return "Cannot divide by zero";
        }

        return num1 / num2;
    } else {
        return "Invalid operator";
    }
}

console.log(calculate(10, 5, '+')); // Output: 15
console.log(calculate(10, 5, '-')); // Output: 5
console.log(calculate(10, 5, '*')); // Output: 50
console.log(calculate(10, 5, '/')); // Output: 2