let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg')
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

// generate computer choice (rock or paper or scissor)
const genCompChoice = () => {
     // rock, paper, scissors
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
   

}

// Game Draw function
const gameDraw = () => {

    msg.innerHTML = "Game Draw"
    msg.style.backgroundColor = "#081b31"
}


// show winner function
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++
        userScorePara.innerHTML = userScore
        console.log('You win');
        msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
       
    }
    else{
        compScore++
        compScorePara.innerHTML = compScore
        msg.innerHTML = `You loose!  ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"

    }
}

// playGame function --> This is actually the most important function
const playGame = (userChoice) =>{
    console.log('User choice = ', userChoice);
    // Generate computer Choice
    const compChoice = genCompChoice()
    console.log('Comp choice = ', compChoice);

    if(userChoice === compChoice){
        // Game Draw
        gameDraw()
     } else{
        let userWin = true;
        
        if(userChoice === "rock"){
            // paper, scissors
            userWin = compChoice === "paper" ? false : true
        }

        else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true
        }

        else{
            // rock, paper
           userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin,userChoice, compChoice)
     }

}


// Here we put playGame() function inside forEach() because we need to play again and again

choices.forEach((choice) => {
    choice.addEventListener('click', ()=>{
        const userChoice = choice.getAttribute("id")
        
        playGame(userChoice)
    })
})

