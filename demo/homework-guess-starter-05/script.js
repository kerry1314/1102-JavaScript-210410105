let random = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".number").textContent = random;
document.querySelector(".number").textContent = "?";
console.log(random);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);

   if (guess === random) {
    document.querySelector(".message").textContent = " correct number!";
    document.querySelector(".highscore").textContent = score;
    document.querySelector(".number").textContent = random;
    document.querySelector("body").style.backgroundColor = "blue";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
   } 

  else if (guess > random) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Guess too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } 

    else {
      document.querySelector(".message").textContent = " Lost the game";
      document.querySelector(".score").textContent = 0;
      
    }
  } 
  

  else if (guess < random) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Guess too low";
      score--;
      document.querySelector(".score").textContent = score;
    } 

    else {
      document.querySelector(".message").textContent = " Lost the game";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = " brown";
      document.querySelector(".number").style.width = "30rem";
    }
  }
});

/* Reset */
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  random = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222222";
  document.querySelector(".number").style.width = "15rem";
  console.log(random);
});