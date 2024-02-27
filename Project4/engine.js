// global variables

randomNumber = parseInt(Math.random()*100+1)
//console.log(randomNumber)
let totalGuesses = 10;
let previousGuessArr = [];

let previousGuess = document.querySelector('#previousGuess')
let submit = document.querySelector('#sbmt');
let remainingGuesses = document.querySelector('#remainingGuess')
let startOver = document.querySelector('.startOver')
let userInput = document.querySelector('#guess')
let displayMsg = document.querySelector('#displayMsg')

para = document.createElement('p')

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        let guess = document.querySelector('#guess').value;
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if (guess>100) {
        let msg = `Enter a number less 100`
        alert(msg)
    }
    else if (guess<0) {
        let msg = `Enter a number more than 0`
        alert(msg)
    }
    else if (isNaN(guess)){
        let msg = `Enter a valid number`
        alert(msg)
    }
    else{
        previousGuessArr.push(guess)
        if (totalGuesses === 0) {
            displayMessage(`Game over. the random number was ${randomNumber}`)
            endGame();
        }
        else{
            compareGuess(guess)
            displayGuess(guess)
        }
    }
}

function compareGuess(guess) {
    if (guess<randomNumber) {
       displayMessage(`Number is too low`);
    }
    else if (guess>randomNumber) {
        displayMessage(`Number is too High`);
    }
    else{
        displayMessage(`You guessed it Right`)
        endGame()
    }
}

function displayMessage(msg) {
   displayMsg.innerHTML = msg
}

function displayGuess(guess) {
    userInput.value = ''
    previousGuess.innerHTML += `${guess}, `
    totalGuesses--
    remainingGuesses.innerHTML = `${totalGuesses}`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    para.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(para)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      previousGuessArr = [];
      totalGuesses = 10;
      previousGuess.innerHTML = '';
      remainingGuesses.innerHTML = `${10} `;
      userInput.removeAttribute('disabled','');
      startOver.removeChild(para);
      displayMsg.innerHTML = ''
  
      playGame = true;
    });
  }
  