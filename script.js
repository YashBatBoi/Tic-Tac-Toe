console.log("Welcome to Tic Tac Toe");
let music = new Audio("music/music.mp3");
let ting = new Audio("music/ting.mp3");
let gameOver = new Audio("music/gameover.mp3");
let turn = "X";
let isGameOver = false;

// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Function to check Win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2, 5, 5, 0],  //translate(5vw, 5vw) rotate(0deg)
    [3, 4, 5, 5, 15, 0],  //translate(5vw, 15vw) rotate(0deg)
    [6, 7, 8, 5, 25, 0],  //translate(5vw, 25vw) rotate(0deg)
    [0, 3, 6, -5, 15, 90],  //translate(-5vw, 15vw) rotate(90deg)
    [1, 4, 7, 5, 15, 90],  //translate(5vw, 15vw) rotate(90deg)
    [2, 5, 8, 15, 15, 90],  //translate(15vw, 15vw) rotate(90deg)
    [2, 4, 6, 5, 15, 135],  //translate(-5vw, 15vw) rotate(45deg)
    [0, 4, 8, 5, 15, 45],  //translate(-5vw, 15vw) rotate(45deg)
  ];
  wins.forEach((e) => {
    if (
      (boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
      (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
      (boxtext[e[0]].innerText !== "")
    ) {
      document.querySelector(".info").innerText = `${boxtext[e[0]].innerText} Won`;
      isGameOver = true;
      document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "200px"
      document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = `20vw`;
    }
  });
};

// Game Logic
let boxes = document.getElementsByClassName("box");
document.getElementsByClassName("info")[0].innerText = `Turn of ${turn}`;

Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      ting.play();
      checkWin();
      if (!isGameOver) {
        document.querySelector(".info").innerText = `Turn of ${turn}`;
      }
    }
  });
});

// Add onClick Listener to reset button
reset.addEventListener('click', () => {
  let boxtexts = document.querySelectorAll(".boxText");
  Array.from(boxtexts).forEach(element => {
    element.innerText = "";
  });
  turn = "X";
  isGameOver = false;
  document.querySelector(".line").style.width = `0vw`;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
});
