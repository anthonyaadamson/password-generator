// Assignment Code

var passwordText = "";
var lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var specialChar = String.fromCharCode(32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47);

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  password = passwordText.value;

};

function getRandomChar(char) {
  return char[Math.floor(Math.random() * char.length)];
};

function generatePassword() {
  var length = prompt('How long would you like your password to be? (between 8 and 128 characters)?', 8);
  if (length >= 8 && length <=128) {
    var lowercaseCharChoice = confirm('Would you like to add lowercase characters to your password?')
    var uppercaseCharChoice = confirm ('Would you like to add uppercase characters to your password?');
    var numberChoice = confirm ('Would you like to add numbers to your password?');
    var specialCharChoice = confirm ('Would you like to add special characters to your password?');

    if (lowercaseCharChoice) { 
      for(i=0;i<length;i++){
        var randomLowerCase = getRandomChar(lowercaseChar);
        passwordText += randomLowerCase;
      }
      console.log(passwordText)
    }

    if (uppercaseCharChoice) { 
      for(i=0;i<length;i++){
        var randomUpperCase = getRandomChar(uppercaseChar);
        passwordText += randomUpperCase;
      }
      console.log(passwordText)
    }
    if (numberChoice) { 
      for(i=0;i<length;i++){
        var randomNumber = getRandomChar(number);
        passwordText += randomNumber;
      }
      console.log(passwordText)
    }
    if (specialCharChoice) { 
      for(i=0;i<length;i++){
        var randomSpecialChar = getRandomChar(specialChar);
        passwordText += randomSpecialChar;
      }
      console.log(passwordText)
    }
  }
  else {
    alert('The length of the password must be between 8 and 128 characters.')
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(passwordText);
console.log(password)