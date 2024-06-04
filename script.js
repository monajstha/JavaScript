let human_score = 0;
let computer_score = 0;
let tie_count = 0;

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 10);
  let computerChoice = null;
  if (
    (randomNum % 2 === 0 && randomNum % 3 === 0) ||
    (randomNum % 2 !== 0 && randomNum % 3 !== 0)
  ) {
    return (computerChoice = "Rock");
  } else if (randomNum % 2 === 0) {
    return (computerChoice = "Paper");
  } else {
    return (computerChoice = "scissors");
  }
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Let's play Rock, Paper, scissors. \nPlease choose one between Rock, Paper and scissors"
  );
  return humanChoice;
}
