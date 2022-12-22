//Arrays defining potential password characters
var numbers = ["0", "1","2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ['!', '@', '#', '#', '$', '%', '^', '&', '*', '(', ')'];
var alphaLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphaUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//Variables for user prompts
var confirmLength = "";
var confirmSpecial;
var confirmNum;
var confirmLower;
var confimrUpper;

// Assignment Code
var generateBtn = document.querySelector("#generate");

//function to bring up prompts for password generation
  function generatePassword(){
  confirmLength = prompt('How many characters should your password contain?');
  // if user input is outside of the 8-128 character range
if (confirmLength <= 7 || confirmLength >=129){
    alert ("Password must be between 8 and 128 characters!");
    confirmLength = prompt('How many characters should your password contain?');

}

//confirms to select additional password parameters
 confirmSpecial = confirm("Click OK to use special characters in your password.");
 confirmNum = confirm("Click OK to use numbers in your password.");
 confirmLower = confirm("Click OK to use lowercase letters in your password.");
 confirmUpper = confirm("Click OK to use uppercase letters in your password.");


}

//Array of potential characters determined by users responses to prompts
var potentialChars = [];

//If statements used to add characters to the potentialChars array
if (confirmSpecial == true){
  potentialChars = potentialChars.concat(specialChars)
}

if (confirmNum == true){
  potentialChars = potentialChars.concat(numbers)
}

if (confirmLower == true){
  potentialChars = potentialChars.concat(alphaLowercase)
}

if(confimrUpper == true){
  potentialChars = potentialChars.concat(alphaUppercase)
}

//Logs new array of potential password characters in the console
console.log(potentialChars);

//Variable for the new user generated password
var newPassword = ""

//For loop to select random characters from the potentialChars array
for (var i=0; i < confirmLength; i++){
  newPassword = newPassword + potentialChars[Math.floor(Math.random() * potentialChars.length)];
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");




  passwordText.value = password;




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

