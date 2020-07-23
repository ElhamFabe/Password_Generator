// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordLength = prompt("How long do you want your password to be (8-128 characters)")

var passwordLower = confirm("Do you want lowercase letters?")

var passwordUpper = confirm("Do you want upper letters?")

var passwordNumeric = confirm("Do you want numbers?")

var passwordSpecial = confirm("Do you want any special characters?")

function generatePassword() {
  var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lower = 'abcdefghijklmnopqrstuvwxyz'.split('')
  var upper = 'abcdefghijklmnopqrstuvwxyz'.toUppercase().split('')
  var special = '!@#%^&**()_'.split('')
  var chosenCharacters = []
  var password = []
  
  if (passwordLower === true) {
    for (var i = 0; i < lower.length; i++) {
      chosenCharacters.push(lower[i])
    }
  }
  if (passwordUpper === true) {

  }
  if (passwordNumeric === true) {

  }
  if (passwordSpecial === true) {

  }

}



