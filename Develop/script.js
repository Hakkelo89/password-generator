// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  const length = 8; //Math.floor(Math.random(8, 128) * 86),
  charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890'^+%&/()=?<>£#$½{[]}!|',";
  retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

const charSet =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890'^+%&/()=?<>£#$½{[]}!|',";
const arrayList = [];
for (var i = 0; i < charSet.length; i++) {
  arrayList.push(charSet.charAt(i));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
