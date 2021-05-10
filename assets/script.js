// define the characters the password can contain
var alphalower = "abcdefghijklmnopqrstuvwxyz";
var alphaupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

// declare variables for each of the elements - 
var passwordTxt = document.getElementById("password");
/* const incAlphalower = document.getElementById("alphalower"); use this if you figure out how to have lowercase as an option */
var incAlphaupper = document.getElementById("alphaupper");
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("symbols");
var length = document.getElementById("textInput");
var generateBtn = document.getElementById("generate");

// when generate password button clicked, check if numbers and symbols boxes are checked, generate password based on length and variables selected
generateBtn.addEventListener("click", () => {
  let characters = alphalower;
  /* incAlphalower.checked ? (characters += alphalower) : ""; */
  incAlphaupper.checked ? (characters += alphaupper) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});

// create password
var generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

// copy to clipboard
var copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  passwordTxt.select();
  document.execCommand("copy");
  alert("Password Copied");
});

//slider
function updateTextInput(val) {
  document.getElementById("textInput").value = val;
}

// bubbles for slider
const
	range = document.getElementById('textInput'),
	rangeV = document.getElementById('rangeV'),
	setValue = ()=>{
		const
			newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
			newPosition = 10 - (newValue * 0.2);
		rangeV.innerHTML = `<span>${range.value}</span>`;
		rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
	};
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);