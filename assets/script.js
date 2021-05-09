// define the characters the password can contain
const alphalower = "abcdefghijklmnopqrstuvwxyz";
const alphaupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

// declare variables for each of the elements
const passwordTxt = document.getElementById("password");
/* const incAlphalower = document.getElementById("alphalower"); */
const incAlphaupper = document.getElementById("alphaupper");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const length = document.getElementById("textInput");
const generateBtn = document.getElementById("generate");

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
const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

// copy to clipboard
const copyBtn = document.getElementById("copy");
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