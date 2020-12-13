//Game value
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessLeft = 3;

//Get UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num');
      maxNum = document.querySelector('.max-num');
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

//set min& max dynamically      
minNum.textContent = min;
maxNum.textContent = max;

//fire event once 'submit'
guessBtn.addEventListener('click', validateNum);

function validateNum(e) {

  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    gameOver(false, `Please enter a number between ${min} and ${max}`)
  } else if (guess === winningNum) {
    guessInput.disabled = true;
    gameOver(false, `${guess} is correct. YOU WIN!`);
    playAgain();
  } else {
    if (guessLeft > 1 ) {
      guessLeft--;
      guessInput.value = '';
      gameOver(true, `${guess} is incorrect. You have ${guessLeft} guesses left`);
    } else {
      guessInput.disabled = true;
      gameOver(true,`Game Over`);
      playAgain();
    }
  }
  e.preventDefault();
}

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function borderChange(color) {
  guessInput.style.borderColor = color;
  guessInput.style.borderWidth = '3px';
}

function gameOver(lost, msg) {
  let color;
  lost? color = 'red' : color = 'green';
  borderChange(color);
  setMessage(msg, color);
}

function playAgain() {
  guessBtn.value = 'play again';
  guessBtn.className = 'play-again';
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

game.addEventListener('mousedown', event => {
  if (event.target.className == 'play-again') {
    window.location.reload();
  }
})