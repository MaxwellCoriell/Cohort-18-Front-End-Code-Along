console.log("You've got this!")

var startTime = Date.now();
console.log("Date Begin:", startTime);

for(var i = 0; i < 20000000; i++){
  var x = i + 1/1 * 6 - 4
};

console.log("I just looped ", i, " times");
var nextTime = Date.now();
console.log("Date Begin:", nextTime);


var dataRequest = new XMLHttpRequest();
dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);

function dataRequestComplete (event) {
  console.log("The BIG transfer is complete and we have data!!");
  var dataDumpTime = Date.now();
  console.log("Date of dataDump ", dataDumpTime, "since beginning", dataDumpTime - startTime);
  var data = JSON.parse(event.target.responseText);
  console.log("the big data", data)
  console.log("how long to proces", Date.now() - startTime)
};

function dataRequestFailed (event) {
  console.log("Oops an error occured while transferring the file");
};

dataRequest.open("GET", "json/JEOPARDY_QUESTIONS1.json")

dataRequest.send(); //this adds it to the event loop 

///////// get the colors
/////////
var dataRequest2 = new XMLHttpRequest();
dataRequest2.addEventListener("load", dataRequest2LoadComplete);
dataRequest2.addEventListener("error", dataRequestFailed);

function dataRequest2LoadComplete(tomato){
	console.log("small data has loaded");
	var smallData = JSON.parse(tomato.target.responseText);
	console.log("small data", smallData);
	showData(smallData);

};

function showData(tomato){
	var colorDiv = document.getElementById("colors-of-the-wind");

	for (seeds in tomato) {
		var colorData = ``;
		var colorItem = tomato[seeds];

		colorData += `<div><h2>${colorItem.color}: ${colorItem.value}</h2><div>`;

		colorDiv.innerHTML += colorData;
	}

};

dataRequest2.open("GET", "json/color.json");
dataRequest2.send();

console.log("Date at end of page", Date.now());



















