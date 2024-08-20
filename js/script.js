const passwordBox = document.getElementById("password");
const passwordLenght = 20;

const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChars = "@#$%^&*()_+~|{}[]<>/-=.;";

const allChars = upperCaseChars + lowerCaseChars + numbers + specialChars

function createPassword(){
	let password = "";
	password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
	password += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
	password += numbers[Math.floor(Math.random() * numbers.length)];
	password += specialChars[Math.floor(Math.random() * specialChars.length)];

	while (passwordLenght > password.length){
		password += allChars[Math.floor(Math.random() * allChars.length)];
	}
	passwordBox.value = password;
}

function copyPassword(){
	passwordBox.select();
	document.execCommand("copy");
}