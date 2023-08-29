//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.


const numero1 = prompt("inserire il primo numero");
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
}

