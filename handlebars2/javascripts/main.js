"use strict";
console.log("Hi Main JS!");

let Handlebars = require('hbsfy/runtime'),
	cakeInventory = require('./bakery.js'),
	cakeTemplate = require('../template/cake-grid.hbs'),
	eventStuff = require("./events.js");

Handlebars.registerHelper("increment", (value) => parseInt(value) + 1 );

	function populatePage(stuff){
		//make a dive to put the rendered html
		let newDiv = document.createElement("div");
		newDiv.innerHTML = cakeTemplate(stuff);
		$("#inventory-cards").append(newDiv);

		eventStuff();
	}

	cakeInventory.loadInventory()
	.then(
		function(inventoryFromLoadInventoryResolve){
			//populate the page
			populatePage(inventoryFromLoadInventoryResolve);
			console.log("cakePromise", inventoryFromLoadInventoryResolve);
		},
		function(reason){
			console.log("something went really wrong.");
		});