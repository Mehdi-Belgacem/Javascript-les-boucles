let firstNumber = 3
let secondNumber = 2
let ul = document.getElementById('numberList');
let result = firstNumber / secondNumber;

while ( result > 1 ) {
    firstNumber = result;
    result = firstNumber / secondNumber;
    let li = document.createElement('li');
    li.textContent = firstNumber;
    ul.appendChild(li);
    break 
} 


