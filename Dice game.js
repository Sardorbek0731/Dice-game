// Dice game

const firstGamer = document.getElementById("first--gamer");
const secondGamer = document.getElementById("second--gamer");
const newGameBtn = document.getElementById("newGame--btn");
const diceImgItem = document.getElementById("dice-img--item");
const RollDiceBtn = document.getElementById("RollDice--btn");
const HoldBtn = document.getElementById("Hold--btn");

let gamerCurrent = 0;
let activePlayer = 1;
RollDiceBtn.addEventListener("click", () => {
  diceImgItem.style.display = "block";
  let randomImgItem = Math.trunc(Math.random() * 6 + 1);
  diceImgItem.src = `./dice-${randomImgItem}.png`;

  if (randomImgItem !== 1) {
    gamerCurrent += randomImgItem;
    document.getElementById(`gamer-${activePlayer}--current`).textContent =
      gamerCurrent;
  } else {
    gamerCurrent = 0;
    document.getElementById(`gamer-${activePlayer}--current`).textContent =
      gamerCurrent;
    activePlayer = activePlayer === 1 ? 2 : 1;
    firstGamer.classList.toggle("active");
    secondGamer.classList.toggle("active");
  }
});

let gamerScore = 0;
let gamer2Score = 0;
HoldBtn.addEventListener("click", () => {
  if (activePlayer === 1) {
    gamerScore += gamerCurrent;
    document.getElementById("gamer-1--score").textContent = gamerScore;
    gamerCurrent = 0;
    document.getElementById(`gamer-1--current`).textContent = 0;
  } else {
    gamer2Score += gamerCurrent;
    document.getElementById("gamer-2--score").textContent = gamer2Score;
    gamerCurrent = 0;
    document.getElementById(`gamer-2--current`).textContent = 0;
  }
  if (gamerScore >= 100) {
    firstGamer.classList.add("win");
    RollDiceBtn.disabled = "true";
    HoldBtn.disabled = "true";
  } else if (gamer2Score >= 100) {
    secondGamer.classList.add("win");
    RollDiceBtn.disabled = "true";
    HoldBtn.disabled = "true";
  }
});

newGameBtn.addEventListener("click", () => {
  gamerScore = 0;
  document.getElementById("gamer-1--score").textContent = 0;
  gamer2Score = 0;
  document.getElementById("gamer-2--score").textContent = 0;
  gamerCurrent = 0;
  document.getElementById(`gamer-1--current`).textContent = 0;
  gamerCurrent = 0;
  document.getElementById(`gamer-2--current`).textContent = 0;

  firstGamer.classList.add("active");
  secondGamer.classList.remove("active");
  firstGamer.classList.remove("win");
  secondGamer.classList.remove("win");
  RollDiceBtn.disabled = "";
  HoldBtn.disabled = "";
  diceImgItem.style.display = "none";

  if (randomImgItem !== 1) {
    gamerCurrent += randomImgItem;
    document.getElementById(`gamer-1--current`).textContent =
      gamerCurrent;
  } else {
    gamerCurrent = 0;
    document.getElementById(`gamer-${activePlayer}--current`).textContent =
      gamerCurrent;
    activePlayer = activePlayer === 2 ? 1 : 2;
    firstGamer.classList.toggle("active");
    secondGamer.classList.toggle("active");
  }
});
