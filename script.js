// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


var getUserOptions
var allowedCharacters

// Function to prompt user for password options
function getAllowedChar(options) {

  var allowedCharacters = "";
  // if (options.incspecialCharacters === true) {
  //   allowedCharacters = allowedCharacters + specialCharacters.join("");
  // }
  // else {
  //   allowedCharacters = allowedCharacters + "";
  // }
  // Note: above commented code is the same as below code using short form.
  allowedCharacters += options.incspecialCharacters ? specialCharacters.join("") : "";
  allowedCharacters += options.incnumericCharacters ? numericCharacters.join("") : "";
  allowedCharacters += options.inclowerCasedCharacters ? lowerCasedCharacters.join("") : "";
  allowedCharacters += options.incupperCasedCharacters ? upperCasedCharacters.join("") : "";
  // console.log(allowedCharacters);

  return allowedCharacters.split("")

}

// Defining the password length and alart to confirm the charaters.
function getUserOptions() {
  var passwordLength = parseInt(prompt("How long is the password. Password length should be 8 to 128."))
  if (passwordLength < 8 || passwordLength > 128) {
    return getUserOptions()
  }
  var incspecialCharacters = confirm("Do you require Special characters?");
  var incnumericCharacters = confirm("Do you require Numeric characters?");
  var inclowerCasedCharacters = confirm("Do you require Lower case?");
  var incupperCasedCharacters = confirm("Do you require Upper case?");
  return {
    incspecialCharacters,
    incnumericCharacters,
    inclowerCasedCharacters,
    incupperCasedCharacters,
    passwordLength,
  }
}



// Function for getting a random element from an array
function getRandom(array) {
  var randomCharacter
  var randomindex = Math.floor(Math.random() * array.length);
  randomCharacter = array[randomindex];
  // console.log(randomCharacter);

  return randomCharacter;
}

// Function to generate password with user input
function generatePassword() {
  console.log(userOptions.passwordLength);

  var password = '';
  for (let index = 0; index < userOptions.passwordLength; index++) {
    password = password + getRandom(allowedCharacters)

  }
  // console.log(password);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
userOptions = getUserOptions()
allowedCharacters = getAllowedChar(userOptions)
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);




