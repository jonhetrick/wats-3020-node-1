/*
The user should run this from the root of the project using `node 1-odd-even/index.js <integer> and should see the word odd or even depending on the integer.  If an integer is not provide, the user should see a usage statement reminding them of the how to run this code.
*/

// get an integer using getargs
let getargs = require('../modules/getargs/index.js');
let input = getargs.getIntegerArg();

/**** Do not modify anything above this line ****/

// test that input is a number
// check input using isNaN and NOT Number.isInteger
if (isNaN(input) || !Number.isInteger(input)) {
	console.log('usage: node 2-odd-even <integer>');
} else {
	//test if integer is divisible by 2
	if (input % 2 == 0) {
		console.log(`${input} is even!`);
	} else {
		console.log(`${input} is odd!`);
	}
}
