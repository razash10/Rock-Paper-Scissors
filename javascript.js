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

function getHumanChoice()
{
    let humanChoice = prompt("Enter your choice: rock, paper, or scissors");
    return humanChoice.toLowerCase();
}

function isWinning(choiceA, choiceB)
{
    return (choiceA === 'rock' && choiceB === 'scissors') ||
           (choiceA === 'paper' && choiceB === 'rock') ||
           (choiceA === 'scissors' && choiceB === 'paper');
}

function playRound(humanChoice) 
{
    const computerChoice = getComputerChoice();
    let result = 'Unexpected error';
    let winner = '';

    if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors')
    {
        result = "Invalid choice!";
    }
    else if (humanChoice === computerChoice)
    {
        result = "It's a tie!";
    }
    else if (isWinning(humanChoice, computerChoice))
    {
        result = "You win! " + humanChoice + " beats " + computerChoice;
        winner = 'human';
    }
    else if (isWinning(computerChoice, humanChoice))
    {
        result = "You lose! " + computerChoice + " beats " + humanChoice;
        winner = 'computer';
    }

    document.getElementById("humanChoice").innerHTML = "Your choice: " + humanChoice;
    document.getElementById("computerChoice").innerHTML = "Computer's choice: " + computerChoice;
    document.getElementById("result").innerHTML = result;
    return winner;
}

function printWinner(humanScore, computerScore)
{
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (humanScore > computerScore)
    {
        console.log("You win the game!");
    }
    else if (humanScore < computerScore)
    {
        console.log("You lose the game!");
    }
    else
    {
        console.log("Game ended with a tie!");
    }
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++)
    {
        const humanChoice = getHumanChoice();

        let winner = playRound(humanChoice, computerChoice);

        if (winner === 'human')
        {
            humanScore++;
        }

        if (winner === 'computer')
        {
            computerScore++;
        }
    }

    printWinner(humanScore, computerScore);
}
