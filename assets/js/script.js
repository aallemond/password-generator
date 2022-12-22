//Arrays defining potential password characters
var numbers = ["0", "1","2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ['!', '@', '#', '#', '$', '%', '^', '&', '*', '(', ')'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//Variables for user prompts
var passLength = "";
var confirmSpecial;
var confirmNum;
var confirmLower;
var confirmUpper;

// Assignment Code
var generateBtn = document.querySelector("#generate");

//function to bring up prompts for password generation
  function generatePassword(){
  passLength = prompt('How many characters should your password contain? (Must be between 8-128 characters)');
  // if user input is outside of the 8-128 character range
if (passLength <= 7 || passLength >=129){
    alert ("Password must be between 8 and 128 characters!");
    passLength = prompt('How many characters should your password contain? (Must be between 8-128 characters)');

}

//Array of potential characters determined by users responses to prompts
var potentialChars = [];

//confirms to select additional password parameters
 confirmSpecial = confirm("Click OK to use special characters in your password. Click cancel if you would not like to use them.");
 
 //if statement to add characters to the potentialChars array based on User responses
 if (confirmSpecial == true){
  potentialChars = potentialChars.concat(specialChars)
}
 confirmNum = confirm("Click OK to use numbers in your password. Click cancel if you would not like to use them.");
 if (confirmNum == true){
  potentialChars = potentialChars.concat(numbers)
}
 confirmLower = confirm("Click OK to use lowercase letters in your password. Click cancel if you would not like to use them.");
 if (confirmLower == true){
  potentialChars = potentialChars.concat(lowercase)
}
 confirmUpper = confirm("Click OK to use uppercase letters in your password. Click cancel if you would not like to use them.");
 if(confirmUpper == true){
  potentialChars = potentialChars.concat(uppercase)
}
 console.log(potentialChars)

 //variable for the newly generated password
 var newPassword = ""

 //for loop to randomly select characters from the potentialChars array to generate a password based on user inputs
  for(var i = 0; i < passLength; i++){
    newPassword = newPassword + potentialChars[Math.floor(Math.random() * potentialChars.length)];
    
    //console logs the newly generated password
    console.log(newPassword)
  }

  //returns the newly generated password
return newPassword

}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");




  passwordText.value = password;




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

