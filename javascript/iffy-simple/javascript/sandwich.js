"use strict";

var Sandwich = (function(){
	var prices = {
		"pb&j": 2.00,
		"cheese": .75
	};

	var something = ["cheese", "meat", "tomato"];

	return {
		getSandwichPrice: function(sandwichname){
			return prices[sandwichname];
		},
		getSandwichName: function(whichone){
			return something[whichone];
		}
	}


})();