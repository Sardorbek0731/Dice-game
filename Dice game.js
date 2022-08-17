// Dice game

const firstGamer = document.getElementById("0--gamer");
const secondGamer = document.getElementById("1--gamer");
const newGameBtn = document.getElementById("newGame--btn");
const diceImgItem = document.getElementById("dice-img--item");
const RollDiceBtn = document.getElementById("RollDice--btn");
const HoldBtn = document.getElementById("Hold--btn");

function swithPlayer() {
  gamerCurrent = 0;
  document.getElementById(`gamer-${activePlayer}--current`).textContent =
    gamerCurrent;
  activePlayer = activePlayer === 0 ? 1 : 0;
  firstGamer.classList.toggle("active");
  secondGamer.classList.toggle("active");
}

let gamerCurrent = 0;
let activePlayer = 0;
let gameOver = true;

RollDiceBtn.addEventListener("click", () => {
  if (gameOver) {
    diceImgItem.style.display = "block";
    let randomImgItem = Math.trunc(Math.random() * 6 + 1);
    diceImgItem.src = `./dice-${randomImgItem}.png`;

    if (randomImgItem !== 1) {
      gamerCurrent += randomImgItem;
      document.getElementById(`gamer-${activePlayer}--current`).textContent =
        gamerCurrent;
    } else {
      swithPlayer();
    }
  }
});

let gamerScore = [0, 0];
HoldBtn.addEventListener("click", () => {
  if (gameOver) {
    gamerScore[activePlayer] += gamerCurrent;
    document.getElementById(`gamer-${activePlayer}--score`).textContent =
      gamerScore[activePlayer];

    if (gamerScore[activePlayer] >= 20) {
      gameOver = false;
      document.getElementById(`${activePlayer}--gamer`).classList.add("win");
    } else {
      swithPlayer();
    }
  }
});

newGameBtn.addEventListener("click", () => {
  gamerScore = [0, 0];
  document.getElementById(`gamer-0--score`).textContent = 0;
  document.getElementById(`gamer-1--score`).textContent = 0;
  gamerCurrent = 0;
  document.getElementById(`gamer-0--current`).textContent = 0;
  document.getElementById(`gamer-1--current`).textContent = 0;

  gameOver = true;
  document.getElementById(`${activePlayer}--gamer`).classList.remove("win");
  firstGamer.classList.add("active");
  secondGamer.classList.remove("active");
  RollDiceBtn.disabled = "";
  HoldBtn.disabled = "";
  diceImgItem.style.display = "none";

  if (randomImgItem !== 1) {
    gamerCurrent += randomImgItem;
    document.getElementById(`gamer-${activePlayer}--current`).textContent =
      gamerCurrent;
  } else {
    swithPlayer();
  }
});
