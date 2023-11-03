var btns = document.querySelectorAll(".buttons");
const handrock = document.querySelector(".hand-rock");
const chandrock = document.querySelector(".chand-rock");
const handpaper = document.querySelector(".hand-paper");
const chandpaper = document.querySelector(".chand-paper");
const handscissor = document.querySelector(".hand-scissor");
const chandscissor = document.querySelector(".chand-scissor");
const computerscore = document.querySelector(".computer_score");
const winp =document.querySelector(".winp")
const winc =document.querySelector(".winc")
const playagainp=document.querySelector(".play_againp");
const playagainc=document.querySelector(".play_againc");


human = 0;

computer_point = 0;
console.log(btns);

function randomnum() {
  return Math.floor(Math.random() * 3);
}

btns.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (gameIsOver) {
      return;
    }
    if (event.currentTarget.classList.contains("rock")) {
      computer();
      human = 1;
      score();
      
      handrock.style.display = "block";
      handpaper.style.display = "none";
      
      handscissor.style.display = "none";
    } else if (event.currentTarget.classList.contains("paper")) {
      computer();
      human = 2;
      score();
      handpaper.style.display = "block";
      handrock.style.display = "none";
      handscissor.style.display = "none";
    } else if (event.currentTarget.classList.contains("scissor")) {
      computer();
      human = 3;
      score();
      handscissor.style.display = "block";
      handrock.style.display = "none";
      handpaper.style.display = "none";
    }
  });
});

function computer() {
  const random = randomnum();
  if (random == 0) {
    computer_point = 1;
    chandpaper.style.display = "none";
    chandscissor.style.display = "none";
    chandrock.style.display = "block";
  } else if (random == 1) {
    computer_point = 2;
    chandscissor.style.display = "none";
    chandrock.style.display = "none";
    chandpaper.style.display = "block";
  } else if (random == 2) {
    computer_point = 3;
    chandrock.style.display = "none";
    chandpaper.style.display = "none";
    chandscissor.style.display = "block";
  }
}

let hscore = 0;
let cscore = 0;

console.log(human);

let gameIsOver = false;



function score() {
  if (gameIsOver) {
    return;
  }
  computer();
  const humanscore = document.querySelector(".human_score");
  const computerscore = document.querySelector(".computer_score");
  
  
  if (human === 1 && computer_point === 2) {
    cscore += 1;
    computerscore.innerText = cscore;
  } else if (human === 2 && computer_point === 3) {
    cscore += 1;
    computerscore.innerText = cscore;
  } else if (human === 3 && computer_point === 1) {
    cscore += 1;
    computerscore.innerText = cscore;
  } else if (computer_point === 1 && human === 2) {
    hscore += 1;
    humanscore.innerText = hscore;
  } else if (computer_point === 2 && human === 3) {
    hscore += 1;
    humanscore.innerText = hscore;
  } else if (computer_point === 3 && human === 1) {
    hscore += 1;
    humanscore.innerText = hscore;
  }
  
  if (hscore === 5 || cscore === 5) {
    gameIsOver = true;
    
    if(hscore==5){
      winp.style.display="block"
      
    }else if(cscore==5){
      winc.style.display="block"
      
    }
  }
}

function win() {
  if (hscore === 5 || cscore === 5) {
    gameIsOver = true;
    
  }
}

playagainp.addEventListener('click', () => {
  window.location.reload();
});
playagainc.addEventListener('click', () => {
  window.location.reload();
});