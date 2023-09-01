//reverse
function wordsReverser(str) {
	return str.replace(/[a-zA-Z]+/gm, function (item) {
		return item.split("").reverse().join("");
	});
}

wordsReverser("NEIGE1");
//longest word
function findLongestWord(str) {
	var strSplit = str.split(" ");
	var longestWord = 0;
	for (var i = 0; i < strSplit.length; i++) {
		if (strSplit[i].length > longestWord) {
			longestWord = strSplit[i].length;
		}
	}
	return longestWord;
}
function longer(champ, contender) {
	return contender.length > champ.length ? contender : champ;
}

function longestWord(str) {
	var words = str.split(" ");
	return words.reduce(longer);
}

console.log(
	longestWord("Saya sangat senang mengerjakan soal algoritma") + ":",
	findLongestWord("Saya sangat senang mengerjakan soal algoritma")
);
//Count same value in diffrent arrays
const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];

for (var i = 0; i < QUERY.length; i++) {
	matches = 0;
	for (var j = 0; j < INPUT.length; j++) {
		if (QUERY[i] == INPUT[j]) {
			matches++;
		}
	}
	console.log(QUERY[i] + " has " + matches + " occurance(s)");
}
//Pengurangan Matrix
const arr = [
	[1, 2, 0],
	[4, 5, 6],
	[7, 8, 9],
];
function diagonalDifference(arr) {
	const primaryDiagonal = arr
		.map((e, i) => e[i])
		.reduce((mem, curr) => mem + curr, 0);
	const secondaryDiagonal = arr
		.map((e, i) => {
			let index = arr.length - i - 1;
			return e[index];
		})
		.reduce((mem, curr) => mem + curr, 0);
	return Math.abs(primaryDiagonal - secondaryDiagonal);
}
console.log(diagonalDifference(arr));
