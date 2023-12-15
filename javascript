let computerGuess;
let userGuess=[];
let userGuessupdate=document.getElementById("textOutput");
let userNumberUpdate=document.getElementById("inputBox");


const init=()=>{
    computerGuess=Math.floor(Math.random()*100);
    <!-- console.log(computerGuess);
     -->
    document.getElementById("newGame").style.display="none";

    document.getElementById("gameArea").style.display="none";
};


 const startGame=()=>{


    document.getElementById("gameArea").style.display="block";
    document.getElementById("welcomeScreen").style.display="none";

 };
 const  startNewGame=()=>{
    document.getElementById("newGame").style.display="inline";
    userNumberUpdate.setAttribute("disabled", true);
 };

const newGameBingn=()=>{
    window.location.reload();
}


 <!-- main loogic -->
 const compareGuess = () => {
    const userNum = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNum];
    document.getElementById("Guesses").innerHTML = userGuess;

    if (userGuess.length < maxGuess) {
        if (userNum > computerGuess) {
            userGuessupdate.innerHTML = "Your guess is too High 😲";
            userNumberUpdate.value = "";
        } else if (userNum < computerGuess) {
            userGuessupdate.innerHTML = "Your guess is too low 😞" ;
            userNumberUpdate.value = "";
        } else {
            userGuessupdate.innerHTML = "Congratulations, you guessed it! 🎉";
            userNumberUpdate.value = "";
            startNewGame();
        }
    } else {
        if (userNum > computerGuess) {
            userGuessupdate.innerHTML = `You Loose!! correct number Was ${computerGuess}  😢`;
            userNumberUpdate.value = "";
            startNewGame();
        } else if (userNum < computerGuess) {
            userGuessupdate.innerHTML = `You Loose!! correct number Was ${computerGuess}  😢`;
            userNumberUpdate.value = "";
            startNewGame();
        } else {
            userGuessupdate.innerHTML = "Congratulations, you guessed it! 🎉";
            userNumberUpdate.value = "";
            startNewGame();
        }
    }

    document.getElementById("Attempts").innerHTML = userGuess.length;
};



 const easyMod=()=>{
    maxGuess=10;
    startGame();
}

 const hardMod=()=>{
    maxGuess=5;

    startGame();
}


