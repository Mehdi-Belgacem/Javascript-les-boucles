let firstNumber = 8 ;
let secondNumber = 2 ;
let ul = document.getElementById('numberList');
let result = firstNumber / secondNumber;

while ( result > 1 ) {
    firstNumber = result;
    let li = document.createElement('li');
    li.textContent = firstNumber;
    result = firstNumber / secondNumber;
    ul.appendChild(li);
}