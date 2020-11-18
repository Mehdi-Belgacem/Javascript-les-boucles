let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
let ul = document.getElementById('daysList');

for( let allDays = 0; allDays <= 6; allDays ++) {
    let li = document.createElement('li');
    li.textContent = days[allDays];
    
    if ( allDays >= 5 ) {
    li.style.fontWeight = 'bold';
    }
    ul.appendChild(li);
}