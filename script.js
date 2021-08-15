// Assignment Code
const generateBtn = document.querySelector("#generate");

//DOM elements
const resultEl = document.getElementById("password");
let cuppercase;
let clowercase;
let cnumbers;
let csymbols;

generateBtn.addEventListener("click", () => {
  const length = prompt(
    "How many characters would you like your password to be?"
  );

  if (length < 8 || length > 128) {
    alert("Length must be 8-128 characters");
  }

  if (length >= 8 && length <= 128) {
    cuppercase = confirm("Would you like to use uppercase letters?");
    clowercase = confirm("Would you like to use lowercase letters?");
    cnumbers = confirm("would you like to use numbers?");
    csymbols = confirm("would you like to use special characters?");
  }

  if (
    cuppercase != true &&
    clowercase != true &&
    cnumbers != true &&
    csymbols != true
  ) {
    alert("You must select at least one character type!");
  }

  const hasLower = clowercase;
  const hasUpper = cuppercase;
  const hasNumber = cnumbers;
  const hasSymbol = csymbols;
  const password = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
  resultEl.innerHTML = password;
});

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  // create a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

// Generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
