// Complete the game using ONLY JavaScript! You can't change any other file ❌

// 1. Create an array of three random numbers between 0 and 9.
const secretNumber = [
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10)
]
// Uncomment the following code to check the array. You might want to know the secret number while programming
// to make sure you are doing it right.
// console.log('Secret number', secretNumber);

// 2. Write a variable 'attempts' and assign it to 0. It will keep track of the attempts of the user.
let attempts = 0;

// 3. Complete the function with the following steps:
function attemptSecretNumber() {
  // Start of the function

  // 3.0. Everytime this function is called, the value of the variable 'attempts' should be incremented by 1.
  attempts = attempts + 1;

  // 3.1. Get the values of the guesses that the user has inserted in the inputs and store them in a 'guesses' variable.
  const guesses = document.getElementsByClassName('guess');

  // 3.2. Create a new variable called 'guessArr' where you will later store the value of each input. Initialize it as an empty array.
  const guessArr = [];

  // 3.3. Store the value of each element in the 'guesses' array, in the guessArr. 
  // 👀 Hint: Remember that you can't iterate through an HTML collection. You might need to do something before.
  // 👀 Hint: The value stored in the guessArr should be a NUMBER. Even when an input is of type='number', the value received is a string.
  // 👀 When you are done, console.log(guessArr) to make sure you are doing it right. Expected output example: [7,2,3];
  [...guesses].forEach(elem => guessArr.push(parseInt(elem.value)))


  // 3.4. Create a variable called 'howManyAreRight' and initialize it to 0. It will later store how many attempts the user has gotten right.
  let howManyAreRight = 0;


  // 3.5. For each element in the guessArr array, check:
  guessArr.forEach((number) => {
  // If the value exists in the secretNumber array AND is in the same position as the user's attempt => console.log('Number X is right and in the right position 🟢'). Only in this case, howManyAreRight should incremented by 1.
  // If the value exists in the secretNumber array => console.log('Number X is right but in the wrong position 🟠')
  // If the value doesn't exist in the secretNumber array => console.log('Number X is not one of the secret numbers 🔴')
  // 👀 Hint: you might want to check the indexes of both numbers
    if (secretNumber.includes(number) && secretNumber.indexOf(number) === guessArr.indexOf(number)) {
      howManyAreRight = howManyAreRight + 1;
      console.log(`Number ${number} is right and is in the right position 🟢`);
    } else if (secretNumber.includes(number)) {
      console.log(`Number ${number} is right but in the wrong position 🟠`);
    } else {
      console.log(`Number ${number} is not one of the secret numbers 🔴`);
    }
  // Another if: If the variable howManyAreRight equals 3, alert the user the following message: 'Omg you win 🎉🎉!'
    if (howManyAreRight === 3) {
      alert('Omg you win 🎉🎉!')
    }
  });

  // 3.6. Select the span where the attempts are shown and print in the HTML how many attempts the user has tried so far.
  document.getElementById('attempts-user').innerHTML = attempts;

  // 3.7. If the user gets to 10 attempts:
  // Alert the user the following message: 'You lose 🥲. The secret number was X, X, X!'
  // Disable the button. You can do that by doing setAttribute('disabled', 'true')
  if (attempts === 10) {
    alert(`You lose 🥲. The secret number was ${secretNumber[0]},${secretNumber[1]},${secretNumber[2]}!`)
    document.getElementById('btn').setAttribute('disabled', 'true');
  }

  // END of the function
}