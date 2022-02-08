alert('ceci est un test');
let firstName= prompt('Entrer votre nom:');
let elt = document.querySelector('.test');

function direBonjour(elt, name){
    elt.innerHTML= `<center> <h1>Bonjour <span style="color: #2F3857">${name}</span></h1></center`;
}

direBonjour(elt, firstName);