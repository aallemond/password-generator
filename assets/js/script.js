//Arrays defining potential password characters
var numbers = ["0", "1","2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ['!', '@', '#', '#', '$', '%', '^', '&', '*', '(', ')'];
var alphaLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphaUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//Variables for user prompts
var confirmLength = "";
var confirmSpecial;
var confirmLower;
var confimrUpper;

// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
 var confirmLength = prompt('How many characters should your password contain?');
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

