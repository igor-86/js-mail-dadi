/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

//Generare un numero random da 1 a 6 per il giocatore
//Generere un numero random da 1 a 6 per pc

// Stabilite chi è il vincitore

/* _________________________ */
const btnStart = document.getElementById("btn");
const btnReset = document.getElementById("btn-reset");
console.log(btnStart, btnReset);
const resultComputer = document.getElementById("computer");
console.log(resultComputer);
const resultUtente = document.getElementById("utente");
const finalResult = document.getElementById("result");


/* BTN Start event */
btnStart.addEventListener("click", function(){
    

const computerNumber = (Math.floor(Math.random() * 6)) + 1;
console.log(computerNumber);

const userNumber = (Math.floor(Math.random()*6))+1;
console.log(userNumber);

let outPut = "";
if (userNumber > computerNumber) {
    outPut = ("Utente vince!");
}else if (userNumber === computerNumber) {
    outPut = ("Pareggio!");
}

else {
    outPut = ("PC vince!");
};

resultComputer.innerHTML = computerNumber;
resultUtente.innerHTML = userNumber;
finalResult.innerHTML = outPut;

});

/* Btn reset event */
btnReset.addEventListener("click", function(){
    resultComputer.innerHTML = "";
    resultUtente.innerHTML = "";
    finalResult.innerHTML= "";
})