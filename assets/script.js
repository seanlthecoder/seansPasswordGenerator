// Assignment code here

// created variables for lowercase, uppercase, numeric and special characters value and placed them in an array

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

var specialCharacters = ['!', '$', '%', '_', '#', '*', '@', '~', '-', '/', '&'];


// grabbed the 'generate' id from HTML using the getElementById document method

var generateBtn = document.getElementById("generate")


// created a function to hold the questions.

function userInputQuestions() {
  console.log("User input questions got called");
  var passwordLength = prompt("What Length do you want your password to be?");

  var passwordString = ""

  // created a characterPool array to hold the character arrays

  var characterPool = []


  // added 'if' statements to solidfy the inputs and responses from users and code
  
  if ((passwordLength < 8) || (passwordLength > 128)) {

    while ((passwordLength < 8) || (passwordLength > 128)) {
      alert("Your password does not meet the requirements. Please try again");
      passwordLength = prompt("Please input length of password");
    }
  }

  var userinputlowercase = confirm("Do you want to include lowercase letters? ' Ok' for Yes or ' Cancel' for No");
  console.log(userinputlowercase);
  if (userinputlowercase === true) {
    characterPool = characterPool.concat(lowerCase);


  }
  
  var userinputupperCase = confirm("Do you want to include uppercase letters? 'Ok' for Yes or 'Cancel' for No");
  if (userinputupperCase === true) {
    characterPool = characterPool.concat(upperCase);
  }
  var userinputnumeric = confirm("Do you want to include numeric values? 'Ok' for Yes or 'Cancel' for No");

  if (userinputnumeric === true) {
    characterPool = characterPool.concat(numeric);
  }

  var userinputspecialCharacters = confirm("Do you want to include any specialcharacters? 'Ok' for Yes or 'Cancel' for No");

  if (userinputspecialCharacters === true) {
    characterPool = characterPool.concat(specialCharacters);
  }
  console.log(characterPool);

  if (!userinputlowercase && !userinputupperCase && !userinputnumeric && !userinputspecialCharacters) {

    while (!userinputlowercase && !userinputupperCase && !userinputnumeric && !userinputspecialCharacters) {
      alert("You must pick at least ONE kind of character");

      var userinputlowercase = confirm("Do you want to include lowercase letters?'Ok' for Yes or 'Cancel' for No");
      var userinputupperCase = confirm("Do you want to include uppercase letters? 'Ok' for Yes or 'Cancel' for No");
      var userinputnumeric = confirm("Do you want to include numeric values? 'Ok' for Yes or 'Cancel' for No");
      var userinputspecialCharacters = confirm("Do you want to include any specialcharacters? 'Ok' for Yes or 'Cancel' for No");
    }
  }
  for (let i = 0; i < passwordLength; i++) {
    var randomNum = Math.floor(Math.random()* characterPool.length);
    passwordString += characterPool[randomNum]
  }
  return passwordString;

}


// Write password to the #password input

function writePassword() {
  console.log("the write password was called");
  var password = userInputQuestions();
 
  var passwordText = document.querySelector("#password");

  // The results of the  userInputQuestions() function will be stored in the 'password' variable

  passwordText.value = password;

}

// Added an event listener for the button and click action

generateBtn.addEventListener("click", writePassword)






