/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

//Generare un numero random da 1 a 6 per il giocatore
//Generere un numero random da 1 a 6 per pc

// Stabilite chi è il vincitore

/* _________________________ */
const computerNumber = (Math.floor(Math.random() * 6)) + 1;
console.log(computerNumber);

const userNumber = (Math.floor(Math.random()*6))+1;
console.log(userNumber);

if (userNumber > computerNumber) {
    alert("Punteggio utente " + userNumber + " Punteggio Pc " + computerNumber + " Utente vince!");
}else if (userNumber === computerNumber) {
    alert("Punteggio utente " + userNumber + " Punteggio Pc " + computerNumber + " Pareggio!");
}

else {
    alert("Punteggio utente " + userNumber + " Punteggio Pc " + computerNumber + " Pc vince!");
}