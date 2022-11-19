
// You will ONLY working on the class SecretNumberGame.
// ⚠️ At the end of the file it is already instanced and the button already has the method called, so make sure the name is the same

class SecretNumberGame {
  // It will have 3 properties:
  constructor(maxAttempts = 10) {
    // - secretNumber: will be an array of 3 random numbers between 0 and 9. 
    this.secretNumber = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10)
    ];
    // - maxAttempts: will be a number passed to the constructor function. If not passed, the default value will be 10
    this.maxAttempts = maxAttempts;
    // - userAttempts: it will start at 0 and it will increase each time the user clicks the guess button
    this.userAttempts = 0;
  }

  // It will also have 2 methods:
  checkAttempt() {
    // Will increase the userAttempts every time it's clicked.
    this.userAttempts++;
    // Will iterate (with a for loop) through the input values (remember by default they are strings) and it will check
    // their positions. For each guessed number, it will give feedback depending on: the guessed number is one of the secret numbers but it's not in the right position, the guessed number is NOT one of the secret numbers, or the guessed number is right AND in the right position.
    let rightGuesses = 0;
    const guesses = document.getElementsByClassName('guess'); // Select each one of the inputs
    const guessArr = []; // Array to store the values parsed into numbers
    [...guesses].forEach((elem) => guessArr.push(parseInt(elem.value))) // Parsing the values and storing them into the guessArr
    for (let i = 0; i < guessArr.length; i++) { // For each guess, let's see:
      if (this.secretNumber.includes(guessArr[i]) && this.secretNumber[i] === guessArr[i]) { // This number is included in the secretNumber array AND is in the same index?
        rightGuesses++; // Increase right guesses
        console.log(`Number ${guessArr[i]} is right and is in the right position 🟢`); // Give feedback
      } else if (this.secretNumber.includes(guessArr[i])) { // Only if the number is included
        console.log(`Number ${guessArr[i]} is right but in the wrong position 🟠`); // Give feedback
      } else {
        console.log(`Number ${guessArr[i]} is not one of the secret numbers 🔴`); // Number is not included nor in the same
      }
      // It will have a rightGuesses counter and, if they are 3, it means the user got all of them right, and the user will be alerted to win.
      if (rightGuesses === 3) {
        alert('Omg you win 🎉🎉!')
      }
    }

    // It will also include in the span "attempts-user" the number of attempts that the user has used so far
    document.getElementById('attempts-user').innerHTML = this.userAttempts;
    // At the end of the method, will invoke the _checkIfLost() method
    this._checkIfLost();
  }

  _checkIfLost() {
    // Will check if the user has used 10 attempts already and, in that case, it will:
    if (this.userAttempts === 10) {
      // 1. alert them a message saying "You lost, the secret number was X,X,X"
      alert(`You lose 🥲. The secret number was ${this.secretNumber[0]},${this.secretNumber[1]},${this.secretNumber[2]}!`)
      // 2. get the guess-btn button and set its attribute "disabled" to "true" (you can use setAttribute for this) so that the user can't click it anymore
      document.getElementById('guess-btn').setAttribute('disabled', 'true');
    }
  }
}

const game = new SecretNumberGame();