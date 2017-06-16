"use strict";

let adding = require("./add.js"); //<---note that we must call adding, not the original 'add'.
	// let subtract = require("./subtract.js");
	// let multiply = require("./multiply.js");


let Calculator = {
	adding
	// subtract, multiply
};

module.exports = Calculator;