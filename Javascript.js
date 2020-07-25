// Assignment Code
var generateBtn = document.querySelector("#generate");

// string of variables 
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "abcdefghijklmnopqrstuvwxyz".toUpperCase;
var specialCase = "~!@#$%^&*_+=/|<>.,?;:";
var numericStrng = "0123456789";

// variables for the user prompt / confirm 
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "abcdefghijklmnopqrstuvwxyz".toUpperCase.split("");
var special ="~!@#$%^&*()_+={}[]/|<>.,?;:'".split("")
var numeric = "0123456789".split("")

// log to see data for debugging
console.log(lower);
console.log(upperCase);
console.log(specialChar);
console.log(numeric);

// users input
var lowerChosen = false;
var upperChosen = false;
var numChosen = false;
var specialChosen = false;
var pwdLength =  0;


// prompts & confirms 
var pwdLength = prompt("How long do you want your password to be (8-128 characters)")

// minimum length alert
while (pwdLength < 8) {
  alert("Did not meet minimun length requirements");
  pwdLength = prompt ("Choose length of password  between 8-128 characters");
} 

var lowerChosen = confirm("Do you want lowercase letters?")

var upperChosen = confirm("Do you want upper letters?")

var numChosen = confirm("Do you want numbers?")

var specialChosen = confirm("Do you want any special characters?")

// function for generate password
function generatePassword (){
    var chosenCharacters = ""
    var password = []

if (lowerChosen) {
    chosenCharacters += numericStrng ;
}
if (upperChosen) {
    chosenCharacters += upperCase;
}
if (numChosen) {
    chosenCharacters += lowerCase;
}
if (specialChosen){
    chosenCharacters += specialCase;
}

}
console.log(chosenCharacters);







}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
