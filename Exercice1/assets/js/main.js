let allYears = document.getElementById('years');

for( let years = 2020; years <= 2030; years++) {
    let li = document.createElement('li');
    li.textContent = years 
    if ( years % 4 == 0){
        li.style.color = 'red';   
    }
    allYears.appendChild(li);
}


 // i += 1 ou i ++ équivaut à i = i +1 \\
 //console.log(i); \\
 //console.log(i + ' %cest une année bissexstille.', 'color:red'); \\
 // != 0 veut dire différent de 0 \\
 // innerHTML pour créé liste ou paragraphe ou autre en HTML \\
 // ((years % 100 != 0) ¡¡ (years % 400 == 0))) \\