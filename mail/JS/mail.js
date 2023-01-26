// creo un array con all'interno x lista di mail
// creo un prompt all'interno del quale il cliente puo' inserire la sua mail
// devo ricordarmi di dare al prompt un parse se voglio che il prompt mi restitutisca un int e non una stringa
// creo un ciclo per analizzare gli input dati dal cliente
// dovro' affidare a "i" di essere cercato fino alla fine degli elementi dell'array
// creo una var riutilizzabile che mi restituisca array[i]
// if prompt input  viene trovato messaggio di benvenuto in caso contrario aler di errore

const mailList = [
    "pinco@pallino.it", //indice 0
    "giovannibianchi@libero.it", // indice 1
    "lasagne.fumanti@libero.it", // indice 2
    "renatozero@gmail.com", // indice 3
    "vasco.rossi@yahoo.it", // indice 4
    "buddy.velastro@cakedesign.us" // indice 5
];

const emailInput = prompt("inserisci la tua mail");

let outputMessage = document.getElementById("screen-message")


for (let i = 0; i < mailList.length; i++ ){
    let currentEl = mailList[i];
    


    if (emailInput == currentEl)
    {
       outputMessage.innerHTML = "Non sei stato riconosciuto dal sistema,ti preghiamo di riprovare";
        
    
       outputMessage.innerHTML = "Benvenuto," + currentEl;
    }}
    
