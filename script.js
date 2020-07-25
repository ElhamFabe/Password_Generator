// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables
var num = '0123456789'.split('');
var lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
var special = '!@#%^&**(*&^$#)_'.split('');

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
  var password = []

  if (lowerChosen === true) {
    for (var i = 0; i < lower.length; i++) {
      chosenCharacters.push(getRandom[lower]);
      password += lowerChosen;
    }
  }
  if (upperChosen === true) {
    for (var i = 0; i < upper.length; i++) {
      chosenCharacters.push(getRandom[upper]);
      password += upperChosen;
    }
  }
  if (numChosen === true) {
    for (var i = 0; i < numChosen.length; i++) {
      chosenCharacters.push(getRandom[numChosen]);
      password += numChosen;
     }
  }
  if (specialChosen === true) {
    for (var i = 0; i < specialChosen.length; i++) {
      chosenCharacters.push(getRandom[specialChosen]);
      password += specialChosen;
     }
  }
  console.log(chosenCharacters);

  for (var i = 0; i < password; i++) {
    var
  }

  
}

function getRandom() {
  var randIndex = Math.floor(Math.random() * lower.length);
  password += lower[randIndex];

  var randIndex = Math.floor(Math.random() * upper.length);
  password += upper[randIndex]; 

   var randIndex = Math.floor(Math.random() * special.length);
  password += special[randIndex];  

  var randIndex = Math.floor(Math.random() * num.length);
  password += num[randIndex];

}

// create return
// console.log ("final password", password)
// return password;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







