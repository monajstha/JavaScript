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

function playGame() {
  for (let i = 0; i < 5; i++) {
    let computer_selection = getComputerChoice()?.toLowerCase();
    let human_selection = getHumanChoice()?.toLowerCase();
    // Checking the null value condition when the user cancels the prompt or provides empty value
    if (!human_selection) {
      console.log("Game is cancelled! Please refresh to restart");
      return;
    }
    // Checking for values other than the valid choices
    else if (
      human_selection !== "rock" &&
      human_selection !== "paper" &&
      human_selection !== "scissors"
    ) {
      console.log(
        "Please enter valid choices only! You entered: ",
        human_selection
      );
      return;
    } else {
      playRound(human_selection, computer_selection);
    }
  }

  console.log("\n");
  console.log("**************************************");
  console.log("Final Scores");

  console.log("Computer Score: ", computer_score);
  console.log("Your Score: ", human_score);
  console.log("Tie: ", tie_count);

  if (human_score > computer_score) {
    console.log(`Result: You win! `);
  } else if (computer_score > human_score) {
    console.log(`Result: You lose! `);
  } else if (
    human_score > 0 &&
    computer_score > 0 &&
    human_score === computer_score
  ) {
    console.log(`Result: It was a tie!`);
  } else {
    return;
  }
  console.log("**************************************");
}

playGame();
