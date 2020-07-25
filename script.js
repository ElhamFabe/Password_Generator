// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


var passwordLength = prompt("How long do you want your password to be (8-128 characters)")

while (passwordLength < 8) {
  alert("Did not meet minimun length requirements");
  passwordLength = prompt ("Choose length of password (8-128 characters)");
} 
var passwordLower = confirm("Do you want lowercase letters?")

var passwordUpper = confirm("Do you want upper letters?")

var passwordNumeric = confirm("Do you want numbers?")

var passwordSpecial = confirm("Do you want any special characters?")

console.log(passwordLength);
console.log(passwordLower);
console.log(passwordUpper);
console.log(passwordSpecial);

// create function from selected user choice
function generatePassword() {

  
  var num = '0123456789'.split('');
  var lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var upper = 'abcdefghijklmnopqrstuvwxyz'.toUppercase().split('');
  var special = '!@#%^&**(*&^$#)_'.split('');
  var chosenCharacters = [];
  var password = []

  if (passwordLower === true) {
    for (var i = 0; i < lower.length; i++) {
      chosenCharacters.push(lower[i]);
      password += passwordLower;
    }
  }
  if (passwordUpper === true) {
    for (var i = 0; i < upper.length; i++) {
      chosenCharacters.push(upper[i]);
      password += passwordUpper
    }
  }
  if (passwordNumeric === true) {
    for (var i = 0; i < special.length; i++) {
      chosenCharacters.push(special[i]);
      password += passwordNumeric
    }
  }
  if (passwordSpecial === true) {
    for (var i = 0; i < num.length; i++) {
      chosenCharacters.push(num[i]);
      password += passwordSpecial
    }
  }


  // create return
  return
}


// console log to see the data
// console.log(num);
// console.log(lower);
// console.log(upper);
// console.log(special);

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// Collapse






