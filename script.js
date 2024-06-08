let human_score = 0;
let computer_score = 0;
let tie_count = 0;
let game_round = 1;
let humanChoice = "";

const scoreDiv = document.querySelector(".score-div");
const scoreHeading = document.createElement("h5");
const finalScoreHeading = document.createElement("h1");
const finalScoreData = document.createElement("p");

const optionsDiv = document.querySelectorAll(".options-div");
optionsDiv.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (game_round > 5) return;
    playRound(e?.target?.id);
  });
});

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
    return (computerChoice = "Scissors");
  }
}

function gameLogic(human_choice, computer_choice) {
  let content = "";
  if (human_choice === "paper" && computer_choice === "rock") {
    content = `Round ${game_round}: You win! Paper beats Rock`;
    human_score++;
  } else if (human_choice === "rock" && computer_choice === "paper") {
    content = `Round ${game_round}: You lose! Paper beats Rock`;
    computer_score++;
  } else if (human_choice === "scissors" && computer_choice === "paper") {
    content = `Round ${game_round}: You win! Scissors beats Paper`;
    human_score++;
  } else if (human_choice === "paper" && computer_choice === "scissors") {
    content = `Round ${game_round}: You lose! Scissors beats Paper`;
    computer_score++;
  } else if (human_choice === "rock" && computer_choice === "scissors") {
    content = `Round ${game_round}: You win! Rock beats Scissors`;
    human_score++;
  } else if (human_choice === "scissors" && computer_choice === "rock") {
    content = `Round ${game_round}: You lose! Rock beats Scissors`;
    computer_score++;
  } else if (human_choice === computer_choice) {
    content = `Round ${game_round}: Tie! Both chose,
      ${human_choice
        .charAt(0)
        .toUpperCase()
        .concat(human_choice.slice(1, human_choice.length))}`;
    tie_count++;
  } else {
    return;
  }
  scoreHeading.textContent = content;
  scoreDiv.appendChild(scoreHeading);
  game_round++;
  if (game_round > 5) {
    scoreLogic();
    return;
  }
}

function playRound(human_choice) {
  let computer_choice = getComputerChoice()?.toLowerCase();
  gameLogic(human_choice, computer_choice);
}

function scoreLogic() {
  let result = "";
  console.log("**************************************");

  console.log("Computer Score: ", computer_score);
  console.log("Tie: ", tie_count);
  console.log("Your Score: ", human_score);

  if (human_score > computer_score) {
    result = "You win!";
  } else if (computer_score > human_score) {
    result = "You lose!";
  } else if (
    human_score > 0 &&
    computer_score > 0 &&
    human_score === computer_score
  ) {
    result = "It was a tie!";
  } else {
    return;
  }
  finalScoreHeading.textContent = result;

  finalScoreData.textContent = `Computer Score: ${computer_score} \n Tie: ${tie_count} \n Your Score: ${human_score}`;
  scoreDiv.appendChild(finalScoreHeading);
  scoreDiv.appendChild(finalScoreData);
}
