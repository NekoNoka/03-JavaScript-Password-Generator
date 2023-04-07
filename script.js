// Assignment code here
function generatePassword() {
	var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "|", ":", "\"", "<", ">", "?", "`", "-", "=", "[", "]", ";", "'", ",", ".", "/"];
	var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var joined = [];
	if (document.getElementById("numerics").checked) {
		joined = joined.concat(numeric);
	}
	if (document.getElementById("caps").checked) {
		joined = joined.concat(capital);
	}
	if (document.getElementById("lows").checked) {
		joined = joined.concat(lowercase);
	}
	if (document.getElementById("specials").checked) {
		joined = joined.concat(special);
	}
	if (joined.length === 0) {
		// alert("Hey you picked no characters so there's no password.");
		return "";
	}
	var passwordLength = document.getElementById("numberinput").value;

	if (isNaN(passwordLength)) {
		alert("Hey you didn't pick a length so there's no password.");
		return "";
	}

	passwordLength = Math.max(Math.min(passwordLength, 128), 8);

	var password = "";
	for (var i = 0; i < passwordLength; i++) {
		var r = Math.floor(Math.random() * joined.length);
		password = password + joined[r];
	}
	
	return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


writePassword()