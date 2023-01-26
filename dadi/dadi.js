const randomNumberPlayer1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberPlayer1);

const randomNumberPlayer2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberPlayer2);

let winnerMessage = document.getElementById("screen-message")

if (randomNumberPlayer1 == randomNumberPlayer2){
    winnerMessage.innerHTML = "Pareggio"
}

if (randomNumberPlayer1 > randomNumberPlayer2){
    winnerMessage.innerHTML = "Vince Player 1"
}

if (randomNumberPlayer1 < randomNumberPlayer2){
    winnerMessage.innerHTML = "Vince Player 2"
}    
