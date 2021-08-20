var word;
const letter_array = [];
var web_array = document.getElementById("letter_array");
var message = document.getElementById("message");
var box_word = document.getElementById("box_word");
var container = document.getElementById("container");

function submitWord() {
	word = document.getElementById("word").value.toUpperCase();
	var length_word = word.length;
	for (var i = 1; i <= length_word; ++i) {
		letter_array.push("_");
	}
	web_array.innerHTML = letter_array;
	box_word.style.display = "none";
	container.style.display = "block";
}
function submitInput() {
	var input = document.getElementById("letterWord").value.toUpperCase();
	if (input.length == 1) {
		var index = word.indexOf(input);
		if (index == -1) {
			message.innerHTML = "Litera '" + input + "' nu apare in cuvant."
		} else {
			message.innerHTML = "Felicitari! Litera '" + input + "' apare in cuvant.";
			while (index != -1) {
				letter_array[index] = input;
				index = word.indexOf(input, index + 1);
			}
			web_array.innerHTML = letter_array;
		}
	} else if (input != word) {
		message.innerHTML = "Cuvantul '" + input + "' nu este corect."
	}
	if (letter_array.join('') == word || input == word) {
		container.style.display = "none";
		message.innerHTML = "Felicitari, ai terminat jocul!<br>Cuvantul introdus a fost: " + word;
	}
}