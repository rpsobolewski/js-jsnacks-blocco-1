//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.


/* const numero1 = prompt("inserire il primo numero");
const numero2 = prompt("inserire il secondo numero");

console.log(numero1, numero2);
const risultato = document.getElementById("risultato")
if(numero1 > numero2){
    const maggiore = numero1;
    console.log(maggiore);
    risultato.innerHTML = "il primo numero è maggiore";
} else if (numero1 < numero2){
    const maggiore = numero2;
    console.log(maggiore);
    risultato.innerHTML = "il secondo numero è maggiore";
} else {
    risultato.innerHTML = "pareggio";
} */

let i = 0;
const numeri = []
while (i<2) {

    let numero = prompt("digita un numero");
    numeri.push(numero);
    i++;

}

const numero1 = numeri[0];
console.log(numero1);
const numero2 = numeri[1];
console.log(numero2);

if(numero1 > numero2){
    const maggiore = numero1;
    console.log(maggiore);
    risultato.innerHTML = "il primo numero è maggiore";
} else if (numero1 < numero2){
    const maggiore = numero2;
    console.log(maggiore);
    risultato.innerHTML = "il secondo numero è maggiore";
} else {
    risultato.innerHTML = "pareggio";
}
