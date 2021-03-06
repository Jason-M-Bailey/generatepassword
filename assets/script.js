// define the characters the password can contain
var alphalower = "abcdefghijklmnopqrstuvwxyz";
var alphaupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

// declare variables for each of the elements - 
var passwordTxt = document.getElementById("password");
var incAlphalower = document.getElementById("alphalower"); 
var incAlphaupper = document.getElementById("alphaupper");
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("symbols");
var length = document.getElementById("textInput");
var generateBtn = document.getElementById("generate");

// when generate password button clicked, check if numbers and symbols boxes are checked, generate password based on length and variables selected
generateBtn.addEventListener("click", () => {

  let characters = "";

  incAlphalower.checked ? (characters += alphalower) : "";

  incAlphaupper.checked ? (characters += alphaupper) : ""; //The addition assignment operator (+=) adds the value of the right operand to a variable and assigns the result to the variable. The types of the two operands determine the behavior of the addition assignment operator. Addition or concatenation is possible.

  incNumbers.checked ? (characters += numbers) : ""; // ".checked ?" determines if the option is selected then it will include var numbers 

  incSymbols.checked ? (characters += symbols) : ""; // what do the colon and quote marks do?

  passwordTxt.value = generatePassword(length.value, characters); //what does passwordTxt.value do here?
});

// create random password, first by saying the amount of characters (length) and the selected arrays (characters)


var generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt( // charAt = character At -- essentially what position a character is in the array 
      Math.floor(Math.random() * characters.length) // this randomly picks a character out from the array until the length has been met
    );
  }
  return password;
};



// copy to clipboard
var copyBtn = document.getElementById("copy"); //gets from the html the id copy

copyBtn.addEventListener("click", () => { //when the button is clicked do something 

  passwordTxt.select(); // this is defined earlier by id #password as the text box, so select the contents of this text box 

  document.execCommand("copy"); //copies to clipboard?
  alert("Password Copied"); //creates popup at top of screen with message
});





//slider
function updateTextInput(val) { // no idea 
  document.getElementById("textInput").value = val; // no idea 
}

// bubbles for slider
const
	range = document.getElementById('textInput'), //find the textInput id
	rangeV = document.getElementById('rangeV'), //find the rangeV id
	setValue = ()=>{ // no idea about anything
		const
			newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
			newPosition = 10 - (newValue * 0.2);
		rangeV.innerHTML = `<span>${range.value}</span>`;
		rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
	};
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);