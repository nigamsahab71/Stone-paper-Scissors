
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");
const userHome = document.querySelector("fa-solid fa-house");



const genCompChoice = () => {
    const options = ["rock" , "paper", "sissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    // rock paper sissors

}
const drawGame =()=>{
    // console.log("game was draw.")
    msg.innerText="Game was Draw, Play Again!";
    msg.style.backgroundColor="#081b31"
}
 
const showWinner = (userWin , userChoice ,compChoice)=>{
    if(userWin){
        // console.log("You won!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText =`You Won! ${userChoice} beats ${compChoice}}`;
        msg.style.backgroundColor="Green"
    }
    else{
        // console.log("You lose!");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText =`You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red"
    }
}
const playGame =(userChoice)=>{
    // console.log("user choice =",userChoice);
   // Generate Computer choice -> modular 
   const compChoice = genCompChoice();
//    console.log("comp choice =",compChoice);
   // compare choices -> modular
   if(userChoice === compChoice)
    {
        //Draw game
        drawGame();
    }
    else{
        //user win
        let userWin = true;
        if(userChoice === "rock"){
            //sissors , paper 
            userWin =compChoice === "paper" ? false: true;
        }
        else if(userChoice === "paper"){
            //rock , sissors
            userWin = compChoice === "sissors" ? false: true;

        }
        else // (userChoice === "sissors")
        {
            //paper , rock
            userWin = compChoice === "rock" ? false: true;

        }
        showWinner(userWin ,userChoice ,compChoice);
        }
    }

// play game -> modular
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked " , userChoice);
        playGame(userChoice);
    });
});