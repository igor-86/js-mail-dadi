/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

// Crea una lista di emial di utenti ipotetici
//Chiedi all'utente email
//Controllo SE la mail indicata è presente tra quelle registrate
        //Stampa Benvenuto
//ALTRIMENTI 
        // Stampa accesso negato

/* _______________________________________ */

const mails = ["giovanni@bool.it","mario@bool.it","manu@bool.it","tina@bool.it"];

// Chiedere all'utente che prodotto cerca
const userQuest = prompt("Scrivi la tua email per accedere");
// console.log(userProduct);
// Per ogni elemento
let isFound = false;

for (let i = 0; i < mails.length; i++) {
  const thisElement = mails[i];
  // Se l'elemento corrisponde alla stringa di ricerca
    // isFound = "trovato"
  // ALTRIMENTI non faccio niente
  if (thisElement === userQuest) {
    isFound = true;
  }

  console.log(thisElement, isFound);
}

if (isFound) {
  alert("Benvenuto")
} else {
  alert("Accesso negato")
}