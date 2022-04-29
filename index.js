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
  // 3.0. Everytime this function is called, the value of the variable 'attempts' should be incremented by 1.
  attempts = attempts + 1;

  // 3.1. Get the values of the guesses on the HTML and store them in a 'guesses' variable.
  const guesses = document.getElementsByClassName('guess');

  // 3.2. Create a new variable called 'guessArr' where you will later store the value of each input. Initialize it as an empty array.
  const guessArr = [];

  // 3.3. For each element in the 'guesses' array, store its value in the guessArr. 
  // 👀 Hint: Remember that you can't iterate through an HTML collection. You might need to do something before.
  // 👀 Hint: The value stored should be a number. Even if the input is type='number', you will receive a string value.
  [...guesses].forEach(elem => guessArr.push(parseInt(elem.value)))

  // console.log the guessArr to make sure you are doing it right. Expected output example: [7,2,3];
  // console.log(guessArr);

  // 3.3. For each element in the guessArr array, check:
  // If the value exists in the secretNumber array => console.log('Number X is right but in the wrong position 🟠')
  // If the value exists in the secretNumber array AND is in the same position => console.log('Number X is right and in the right position 🟢')
  // If the value doesn't exist, console.log('Number X is not one of the secret numbers 🔴')
  let howManyAreRight = 0;
  guessArr.forEach((number) => {
    if (secretNumber.includes(number) && secretNumber.indexOf(number) === guessArr.indexOf(number)) {
      howManyAreRight = howManyAreRight + 1;
      console.log(`Number ${number} is right and is in the right position 🟢`);
    } else if (secretNumber.includes(number)) {
      console.log(`Number ${number} is right but in the wrong position 🟠`);
    } else {
      console.log(`Number ${number} is not one of the secret numbers 🔴`);
    }
    if (howManyAreRight === 3) {
      alert('Omg you win 🎉🎉!')
    }
  });

  document.getElementById('attempts-user').innerHTML = attempts;
  if (attempts === 10) {
    document.getElementById('btn').setAttribute('disabled', 'true');
  }

}

// If the person didn't write anything, the value should be 0.
  // Keep in mind that, even if the input type is number, the value will be a string.