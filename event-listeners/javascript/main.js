
var outputEl = document.getElementById("output-target");

var articleEl = document.getElementsByClassName("article-section");
console.log("articleEl", articleEl);

function handleSectionCLick(MouseEvent){
	console.log(MouseEvent);
	var elementText = MouseEvent.target.innerHTML;
	outputEl.innerHTML = "You clicked on the " + elementText
}

for (var i = 0; i < articleEl.length; i++){
	articleEl.item(i).addEventListener("click", handleSectionCLick);
}

// change header with mouse-over
var header = document.getElementById("page-header");

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

function handleHeaderMouseOver(event){
	outputEl.innerHTML = "THE FORCE IS STRONG WITH THIS ONE";
}
// this stays up when mouse moves away after initial mouse-over, until click on movie title
function handleHeaderMouseOut(event){
	outputEl.innerHTML = "REMEMBER... THE FORCE WILL BE WITH YOU ALWAYS";
}

//console log keypresses in imput box
var fieldEl = document.getElementById("keypress-imput");

fieldEl.addEventListener("keyup", function(event){
	console.log("event", event);
	outputEl.innerHTML = event.target.value;
})

//edit text on click set
var obiwan = document.getElementById("obi-wan");
//make text blue
document.getElementById("add-color")
	.addEventListener("click", function(event){
		obiwan.classList.toggle("blue");
	})
//make text large
document.getElementById("make-it-large")
	.addEventListener("click", function(event){
		obiwan.classList.toggle("large");
	})
//make text bordered
document.getElementById("add-border")
	.addEventListener("click", function(event){
		obiwan.classList.toggle("bordered");
	})
//make text rounded
document.getElementById("add-rounding")
	.addEventListener("click", function(event){
		obiwan.classList.toggle("rounded");
	})

//generic target on click on page
document.getElementById("wrapper")
	.addEventListener("click", function(event){
			console.log("target", event.target);
			console.log("currentTarget", event.currentTarget);

			if(event.target.tagName.toLowerCase() === "li"){
			console.log("You clicked on the <li> element");
			}

			if(event.target.className === "article-section"){
			console.log("You clicked on the <article-section> element")
			}

	});


//

var myArr = [
"A long time ago in a galaxy far, far away…",
"Use the force, Luke.",
"The force is strong with this one.",
"Do. Or do not. There is no try.",
"Fear is the path to the dark side.",
"Someday I will be the most powerful Jedi ever.",
"You were the chosen one!"
]

myArr.forEach(function(quote, index){
	var phraseString = `<div id ="quote--${index}"
						<h3>"${quote}" - Star Wars</h3>
						</div>`;

	let phraseDiv = document.createElement("div");
	phraseDiv.innerHTML = phraseString;
	document.getElementById("stick-It-Here").appendChild(phraseDiv);
	var phraseDom = document.getElementById(`quote--${index}`);
	phraseDom.addEventListener("click", function(event){
		console.log("event", event);
		event.currentTarget.classList.add("red");
	})
});


























