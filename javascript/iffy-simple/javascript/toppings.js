"use strict";

var Sandwich = (function(originalSandwich){

	var toppingPrices = {
		whippedCream: 0.50,
		mayo: 0.25,
		captaincrunch: 0.10,
		bacon: 1.00
	};

	originalSandwich.getToppingPrice = function(topping) {
		return toppingPrices[topping];
	};

	originalSandwich.setTopping = function(obj){
		console.log("obj", obj);
		// var name = obj
		console.log(Object.keys(obj));
		toppingPrices(Object.keys(obj)) : Object.values(obj);
		console.log("show me the toppings!", toppingPrices)
	}

	return originalSandwich;


})(Sandwich);