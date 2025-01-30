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

function playRound(humanChoice, computerChoice) 
{
    if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors')
    {
        console.log("Invalid choice!");
        return;
    }

    if (humanChoice === computerChoice)
    {
        console.log("It's a tie!");
        return;
    }

    if (isWinning(humanChoice, computerChoice))
    {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        return 'human';
    }

    if (isWinning(computerChoice, humanChoice))
    {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        return 'computer';
    }
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
        const computerChoice = getComputerChoice();
        
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
