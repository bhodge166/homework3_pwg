// Assignment Code
var generateBtn = document.querySelector("#generate");
// variables for option arrays
var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "1234567890".split("")
var upperletters = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
var upperArray = upperletters.split("");
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");

// variable to store randomly generated characters from arrays above
var generatedPassword = [];
// variables to capture inputs from prompts
var lowerCon = 0;
var upperCon = 0;
var specialCon = 0;
var numbersCon = 0;
var categories = 0;
var confirmAmount = 0;

// Write password to the #password input
function writePassword() {
  // to reset on new click
  password = ""
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // to reset on new click
  lowerCon = 0;
  upperCon = 0;
  specialCon = 0;
  numbersCon = 0;
  categories = 0;
  generatedPassword = []
  // user prompts to determine password specifications
  confirmAmount = window.prompt(
    "Please input desired password length between 8 and 128 characters:"
  );
  // if else to confirm password is within guidelines
  if (confirmAmount < 8 || confirmAmount > 128) {
    window.alert("Password length must be between 8 and 128 characters");
  } else {
    var confirmLower = window.confirm(
      "Would you like to include lowercase letters?"
    );
    var confirmUpper = window.confirm(
      "Would you like to include uppercase letters?"
    );
    var confirmNumb = window.confirm("Would you like to include numbers?");
    var confirmSpecial = window.confirm(
      "Would you like to include special characters?"
    );
  }
  // increase variables above if user wishes to include. used below to determine if functions to randomly select characters run below
  if (confirmLower === true) {
    lowerCon++;
  }
  if (confirmUpper === true) {
    upperCon++;
  }
  if (confirmNumb === true) {
    numbersCon++;
  }
  if (confirmSpecial === true) {
    specialCon++;
  }
  // sets amount of categories based on user criteria. used so each selection gets at least 1 character
  categories = lowerCon + upperCon + specialCon + numbersCon;
 
  // runs functions if user chooses to include
  if (lowerCon > 0) {
   generateLowercaseLetters();}
 
   if (upperCon > 0) {
    generateUppercaseLetters()
  }
 
  if (numbersCon > 0) {
    generatenumbers()
  }
 
  if (specialCon > 0) {
    generateSpecial()
  }
// adds additional characters to generated password up to users selected amount by pulling random characters from the created array
  while (generatedPassword.length < confirmAmount) {
    generatedPassword.push(generatedPassword[Math.floor(Math.random() * generatedPassword.length)])
  }
// shuffles completed password finished above
  shufflePassword(generatedPassword)

  // returns completed password
  return generatedPassword.join("");
}

// functions to pull from option arrays randomly and push into new array a random number of times based on categories selected and remaining password lengths
// 1 is added at the end of result to ensure that there is at least 1 character chosen from selection
function generateLowercaseLetters() {
  categories--;
  var result = Math.floor(
    Math.random() * (confirmAmount - generatedPassword.length - categories) + 1
  );
  for (var i = 0; i < result; i++) {
    generatedPassword.push(
      letters[Math.floor(Math.random() * letters.length)]
    );
  }
}

function generateUppercaseLetters() {
  categories--;
  var result = Math.floor(
    Math.random() * (confirmAmount - generatedPassword.length - categories) + 1
  );
  for (var i = 0; i < result; i++) {
    generatedPassword.push(
      upperArray[Math.floor(Math.random() * upperArray.length)]
    );
  }
}

function generatenumbers() {
  categories--;
  var result = Math.floor(
    Math.random() * (confirmAmount - generatedPassword.length - categories) + 1
  );
  for (var i = 0; i < result; i++) {
    generatedPassword.push(
      numbers[Math.floor(Math.random() * numbers.length)]
    );
  }
}

function generateSpecial() {
  categories--;
  var result = Math.floor(
    Math.random() * (confirmAmount - generatedPassword.length - categories) + 1
  );
  for (var i = 0; i < result; i++) {
    generatedPassword.push(
      special[Math.floor(Math.random() * special.length)]
    );
  }
}

// Taken from stackoverflow. Randomizes the array using Durstenfeld shuffle algorithm. 
// Takes previously created generatedPassword array and uses for loop with placeholder variables to rebuild array in random order
function shufflePassword(generatedPassword) {
  for (var i = generatedPassword.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = generatedPassword[i];
      generatedPassword[i] = generatedPassword[j];
      generatedPassword[j] = temp;
  }
  return generatedPassword
}

// Given event listener to generate button
generateBtn.addEventListener("click", writePassword);
