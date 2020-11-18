let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'] ;
let ul = document.getElementById('languageList');

for ( let allLanguages = 0; allLanguages <= 7; allLanguages++) {
    let li = document.createElement('li');
    li.textContent = languages[allLanguages];
    ul.appendChild(li);
}


// let += ...... raccourcis de let = let + .... \\


