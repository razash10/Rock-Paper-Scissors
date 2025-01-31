let humanScore = 0;
let computerScore = 0;
const scoreToWin = 5;

function playRound(humanChoice) 
{
    if (isGameOver())
    {
        return;
    }

    const computerChoice = getComputerChoice();
    let result = '';

    if (humanChoice === computerChoice)
    {
        result = "It's a tie!";
    }
    else if (isWinning(humanChoice, computerChoice))
    {
        result = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    }
    else if (isWinning(computerChoice, humanChoice))
    {
        result = "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++
    }

    updateGameStatusDisplay(humanChoice, computerChoice, result)
}

function getComputerChoice() 
{
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function isWinning(choiceA, choiceB)
{
    return (choiceA === 'rock' && choiceB === 'scissors') ||
           (choiceA === 'paper' && choiceB === 'rock') ||
           (choiceA === 'scissors' && choiceB === 'paper');
}

function isGameOver()
{
    return humanScore === scoreToWin || computerScore === scoreToWin;
}

function updateGameStatusDisplay(humanChoice, computerChoice, result)
{
    document.getElementById("humanChoice").innerHTML = "Your choice: " + humanChoice;
    document.getElementById("computerChoice").innerHTML = "Computer's choice: " + computerChoice;
    document.getElementById("result").innerHTML = result;
    document.getElementById('humanScore').textContent = `Human: ${humanScore}`;
    document.getElementById('computerScore').textContent = `Computer: ${computerScore}`;

    if (isGameOver())
    {
        let finalResult = '';

        if (humanScore > computerScore)
        {
            finalResult = "You win the game!";
        }
        else
        {
            finalResult = "You lose the game...";
        }

        document.getElementById("finalResult").innerHTML = finalResult
    }
}
