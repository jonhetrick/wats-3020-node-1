/*
The user should run this from the root of the project using `node 1-odd-even/index.js <integer> and should see the word odd or even depending on the integer.  If an integer is not provide, the user should see a usage statement reminding them of the how to run this code.
*/

// get input using getargs
let getargs = require('../modules/getargs/index.js');
let input = getargs.getStringArg();

/**** Do not modify anything above this line ****/

// TODO make sure that the user entered a string
if (!input) {
	console.log('usage: 3-string-contains-hello <string>');
	console.log('To include spaces use quotes!');
} else {
	// check to see if string contains hello
	// if it does report back the position in the string where it begins

	if (input.indexOf('hello') >= -1) {
		console.log(`hello was found at the index of: , ${input.indexOf('hello')}`);
	} else {
		console.log('Hello was not found in the string found in the input. ');
	}
}
