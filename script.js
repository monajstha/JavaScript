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

console.log("\n\n\n\n\n\n\n\n\n");

function playRound(human_choice, computer_choice) {
  if (human_choice === "paper" && computer_choice === "rock") {
    console.log("You win! Paper beats Rock");
    human_score++;
  } else if (human_choice === "rock" && computer_choice === "paper") {
    console.log("You lose! Paper beats Rock");
    computer_score++;
  } else if (human_choice === "scissors" && computer_choice === "paper") {
    console.log("You win! scissors beats Paper");
    human_score++;
  } else if (human_choice === "paper" && computer_choice === "scissors") {
    console.log("You lose! scissors beats Paper");
    computer_score++;
  } else if (human_choice === "rock" && computer_choice === "scissors") {
    console.log("You win! Rock beats scissors");
    human_score++;
  } else if (human_choice === "scissors" && computer_choice === "rock") {
    console.log("You lose! Rock beats scissors");
    computer_score++;
  } else if (human_choice === computer_choice) {
    console.log(
      "Tie! Both chose",
      human_choice
        .charAt(0)
        .toUpperCase()
        .concat(human_choice.slice(1, human_choice.length))
    );
    tie_count++;
  } else {
    return;
  }
}
