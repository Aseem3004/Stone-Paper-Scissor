let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const genCompChoice = () =>{
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}
const showWinner = (userWinner, userChoice, compChoice) =>{
    if(userWinner){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'lightgreen';
        msg.style.innerText = 'center';
    }else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = 'lightcoral';
    }
}
    const playGame = (userChoice) =>{
        const compChoice = genCompChoice();

        if(userChoice === compChoice){
            msg.innerText = `It's a Tie! You both chose ${userChoice}`;
            msg.style.backgroundColor = 'lightgray';
            return;
        }else{
            let userWin = true;
            if(userChoice === 'rock'){
                userWin = compChoice === "scissors" ? true : false;
            }else if(userChoice === 'paper'){
                userWin = compChoice === "rock" ? true : false;
            }else if(userChoice === 'scissors'){
                userWin = compChoice === "paper" ? true : false;
            }
            showWinner(userWin, userChoice, compChoice);

        }
    }
    choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

