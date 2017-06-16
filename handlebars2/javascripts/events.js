"use strict";

let cardStyle = require('./cards');

var throwError = function() {
	window.alert("Please CLick on a card to begin editing");
};

function activateEvents(){
	$(".card-wrapper").click(cardStyle.highlightCard);
	$("#editInput").keyup(function(){
		let highlighted = document.getElementsByClassName('is-clicked');
		if (highlighted.length === 0) {
			throwError();
		} else {
			cardStyle.editCard();
		}
	});
}


module.exports = activateEvents;
