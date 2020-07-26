// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables
var num = '0123456789'.split('');
var lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
var special = '!@#%^&**(*&^$#)_'.split('');

var actualCharacters = []

// prompts & confirms
var pwdLength = prompt("How long do you want your password to be (8-128 characters)")
while (pwdLength < 8) {
  alert("Did not meet minimun length requirements");
  pwdLength = prompt("Choose length of password between 8-128 characters");
}
var lowerChosen = confirm("Do you want lowercase letters?")

var upperChosen = confirm("Do you want upper letters?")

var numChosen = confirm("Do you want numbers?")

var specialChosen = confirm("Do you want any special characters?")

console.log(pwdLength);
console.log(lowerChosen);
console.log(upperChosen);
console.log(specialChosen);
console.log(numChosen);

// create function from selected user choice
function generatePassword() {
  var chosenCharacters = [];

  if (lowerChosen === true) {
    for (var i = 0; i < lower.length; i++) {
      chosenCharacters.push(getRandom(lower));
    }
  }
  if (upperChosen === true) {
    for (var i = 0; i < upper.length; i++) {
      chosenCharacters.push(getRandom(upper));
    }
  }
  if (numChosen === true) {
    for (var i = 0; i < num.length; i++) {
      chosenCharacters.push(getRandom(num));
    }
  }
  if (specialChosen === true) {
    for (var i = 0; i < special.length; i++) {
      chosenCharacters.push(getRandom(special));
    }
  }
  console.log(chosenCharacters);

  for (var i = 0; i < pwdLength; i++) {
    actualCharacters.push(getRandom(chosenCharacters));
  }
  console.log(actualCharacters)
  // console.log("final password", resolve)
  return actualCharacters.join("");
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randEl = arr[randIndex];

  return randEl;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







