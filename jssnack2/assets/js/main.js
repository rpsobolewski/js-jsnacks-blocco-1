//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

const parola1 = prompt("inserire la prima parola");
const parola2 = prompt("inserire la seconda parola");

console.log(parola1, parola2);

const lunghezza1 = parola1.length;
console.log(lunghezza1);
const lunghezza2 = parola2.length;
console.log(lunghezza2);


const parolaLunga = document.getElementById("parolaLunga");
const parolaCorta = document.getElementById("parolaCorta");


if (lunghezza1 > lunghezza2) {
    parolaLunga.innerHTML = parola1;
    parolaCorta.innerHTML = parola2;

} else if (lunghezza1 < lunghezza2){
    parolaLunga.innerHTML = parola2;
    parolaCorta.innerHTML = parola1;
} else{
    parolaCorta.innerHTML = "le parole hanno la stessa lunghezza"
}