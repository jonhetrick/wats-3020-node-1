// write an app that meets requirements:
// * uses if/else
// * uses at least one operator +, -, *, /, %
// * reads an arg from the command line and provides usage if not present or wrong type
// suggestions:
// * convert Celsius temperature to Fahrenheit F =(C * 9/5) + 32.00
// * convert Fahrenheit to Celsius C = (F - 32) *  5/9
// * convert pennies to dollars, for example 136 pennies is $1.36

// get an integer using getargs
let getargs = require('../modules/getargs/index.js');
let input = getargs.getIntegerArg();

//Convert Temperature from Celsius to Fahrenheit.
if (isNaN(input) || !Number.isInteger(input)) {
	console.log('useage: 5-mini-app <integer>');
} else {
	let tempInFahrenheit = input * (9 / 5) + 32.0;
	console.log(`${input} degrees in Celsius is ${tempInFahrenheit} in Fahrenheit!`);
}
