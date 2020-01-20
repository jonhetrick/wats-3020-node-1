/*
This app will convert minutes to hours and minutes.  If no integer is supplied, a usage message will be logged.  If an integer is supplied, the hours are calculated using the division operator `/` and the minutes are calculated using the modulo `%` operator. In addition the pluarality of the units (hour/hours and minute/minutes) are calculated based on the value of the hours or minutes.
*/

// get an integer using getargs
let getargs = require('../modules/getargs/index.js');
let input = getargs.getIntegerArg();

/**** Do not modify anything above this line ****/

// test that input is a number
// check input using isNaN and NOT Number.isInteger since we are using getIntegerArg, we won't actually hit NOT Number.isInteger
if (isNaN(input) || !Number.isInteger(input)) {
	console.log('useage: 4-hours-to-minutes <integer>');
} else {
	// Math.floor fixes issue of anything from 30-59 still returning 1 for hours instead of 0.
	let hours = Math.floor(input / 60)
	let minutes = input % 60;

	let hrs = hours == 1 ? 'hour' : 'hours';
	let mins = minutes == 1 ? 'minute' : 'minutes';
	console.log(`${input} minutes is ${hours} ${hrs} ${minutes} ${mins} `);
}
