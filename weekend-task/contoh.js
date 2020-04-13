// const angka = [1, 2, 3, 4, 5];
// const sum = angka.reduce((total, value) => total + value, 0); // kita dpt mengganti 0 dengan angka lain untuk mendapatkan hasil penjumlahan yang berbeda
// console.log(sum); // Output: 15

// function fastestIsPalindrome(str) {
//     var len = Math.floor(str.length / 2);
//     for (var i = 0; i < len; i++)
//       if (str[i] !== str[str.length - i - 1])
//         return false;
//     return true;
//   }

//   console.log(fastestIsPalindrome('silvy'))

var caesarShift = function(str, amount) {

	// Wrap the amount
	if (amount < 0)
		return caesarShift(str, amount + 26);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}

		// Append
		output += c;

	}

	// All done!
	return output;

};

console.log(caesarShift('abc', 1))