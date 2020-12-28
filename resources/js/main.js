let currentPlayer = 1;
let p1Score = 0;
let p2Score = 0;
const noOfMoves = document.querySelector(".noOfMoves");
const diceOne = document.querySelector(".diceOne");
const diceTwo = document.querySelector(".diceTwo");
const rollIt = document.querySelector(".rollbtn");
const p1btn = document.querySelector(".p1btn");
const p2btn = document.querySelector(".p2btn");
const restartIt = document.querySelector(".restartbtn");
const result = document.querySelector(".result");

p2btn.disabled = true;
p2btn.classList.add("disable");
function roll1() {
  let d1 = Math.floor(Math.random() * 6 + 1);
  let d2 = Math.floor(Math.random() * 6 + 1);
  p1Score++;
  diceOne.src = `./resources/images/dice-${d1}.png`;
  diceTwo.src = `./resources/images/dice-${d2}.png`;
  noOfMoves.innerHTML = `No of moves: ${p1Score}`;
  if (d1 == 1 && d2 == 1) {
    currentPlayer++;
    p1btn.disabled = true;
    p1btn.classList.add("disable");
    result.innerHTML = "Player 2 turn";
    p2btn.disabled = false;
    p2btn.classList.remove("disable");
  }
}
function roll2() {
  let d1 = Math.floor(Math.random() * 3 + 1);
  let d2 = Math.floor(Math.random() * 3 + 1);
  p2Score++;
  diceOne.src = `./resources/images/dice-${d1}.png`;
  diceTwo.src = `./resources/images/dice-${d2}.png`;
  noOfMoves.innerHTML = `No of moves: ${p2Score}`;
  if (d1 == 1 && d2 == 1) {
    p2btn.disabled = true;
    p2btn.classList.add("disable");
    if (p1Score < p2Score) {
      result.innerHTML = "Player 1 Won!";
    } else if (p2Score < p1Score) {
      result.innerHTML = "Player 2 Won!";
    } else {
      result.innerHTML = "Game Draw!";
    }
    noOfMoves.innerHTML = `Player One: ${p1Score} &nbsp;&nbsp;Player Two: ${p2Score} `;
  }
}
function restart() {
  rollIt.disabled = false;
  result.innerHTML = "<br>";
  diceOne.src = `./resources/images/dice-0.png`;
  diceTwo.src = `./resources/images/dice-0.png`;
  rollIt.classList.remove("disable");
  noOfMoves.innerHTML = `<br>`;
  p1Score = 0;
  p2Score = 0;
  currentPlayer = 1;
  result.innerHTML = "Player 1 turn";
}
