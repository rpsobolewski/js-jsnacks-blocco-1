//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.


let somma = 0;

const sommaFinale = document.getElementById("sommaFinale");

for (let index = 0; index < 10; index++) {
    const numero = prompt("inserire un numero")
    
    somma += Number(numero);
    console.log(somma);
    sommaFinale.innerHTML = "la somma è: " + somma;
}