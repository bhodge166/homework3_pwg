// Assignment Code
var generateBtn = document.querySelector("#generate");

var letters = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = letters.split("");

var numbers = "1234567890";
var numbersArray = numbers.split("");

var upperletters = letters.toUpperCase();
var upperArray = upperletters.split("");

var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var specialArray = special.split("");

var generatedPassword = [];

var lowerCon = 0;
var upperCon = 0;
var specialCon = 0;
var numbersCon = 0;
var categories = 0;
var confirmAmount = 0;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  lowerCon = 0;
  upperCon = 0;
  specialCon = 0;
  numbers = 0;
  categories = 0;
  confirmAmount = window.prompt(
    "Please input desired password length between 8 and 128 characters:"
  );
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
  categories = lowerCon + upperCon + specialCon + numbersCon;
  generateLowercaseLetters();
  return generatedPassword.join("");
}

function generateLowercaseLetters() {
  categories--;
  var result = Math.floor(
    Math.random() * (confirmAmount - generatedPassword.length - categories) + 1
  );
  for (var i = 0; i < result; i++) {
    generatedPassword.push(
      lowerArray[Math.floor(Math.random() * lowerArray.length)]
    );
  }
}

function generateUppercaseLetters() {
  return upperArray[Math.floor(Math.random() * upperArray.length)];
}

function generatenumbers() {
  return numbersArray[Math.floor(Math.random() * numbersArray.length)];
}

function generateSpecial() {
  return specialArray[Math.floor(Math.random() * specialArray.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
