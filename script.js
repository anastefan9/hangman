var word, length_word, letter, index;
const letter_array = [];
var web_array = document.getElementById("letter_array");
var message = document.getElementById("message");
var box_word = document.getElementById("box_word");
var box_letter = document.getElementById("box_letter");
var box_array = document.getElementById("box_array");
var box_whole_word = document.getElementById("box_whole_word");

function submitWordFunction() {
	word = document.getElementById("word").value.toUpperCase();
	length_word = word.length;
	for (var i = 1; i <= length_word; ++i) {
		letter_array.push("_");
	}
	web_array.innerHTML = letter_array;
	box_word.style.display = "none";
	occurence_boxes("block");
}
function letterFunction() {
	letter = document.getElementById("letter").value.toUpperCase();
	index = word.indexOf(letter);
	if (index == -1) {
		message.innerHTML = "Litera '" + letter + "' nu apare in cuvant."
	} else {
		message.innerHTML = "Felicitari! Litera '" + letter + "' apare in cuvant.";
		while (index != -1) {
			letter_array[index] = letter;
			index = word.indexOf(letter, index + 1);
		}
		web_array.innerHTML = letter_array;
	}
	if (letter_array.join('') == word) {
		occurence_boxes("none");
		message.innerHTML = "Felicitari, ai gasit toate literele!<br>Cuvantul introdus a fost: " + word;
	}
}

function wholeWordFunction() {
	var wholeWord = document.getElementById("whole_word").value.toUpperCase();
	if (wholeWord == word) {
		occurence_boxes("none");
		message.innerHTML = "Felicitari, ai aflat cuvantul!<br>Cuvantul introdus a fost: " + word;
	} else {
		message.innerHTML = "Cuvantul introdus nu este corect."
	}
}
function occurence_boxes(action) {
	box_letter.style.display = action;
	box_array.style.display = action;
	box_whole_word.style.display = action;
}