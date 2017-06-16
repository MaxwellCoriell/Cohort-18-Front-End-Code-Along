"use strict";
console.log("handlebars main js file is loaded")

///////////////// Example 1 ///////////////////////////////////

// Data
// context – the object where properties you include in curly braces are looked up
let context = { "name" : "Max", 
				"occupation" : "junior software developer-in-training",
				"language" : "Handlebars"};

// Step 1
// Retrieve the template data from the HTML.
let template = $('#handlebars-starter').html();

// Step 2
// Compile the template data into a function
let templateScript = Handlebars.compile(template);

// Step 3
//Execute the newly created function passing the data as an argument
let html = templateScript(context);

// Step 4
// Insert the HTML code into the page
$(document.body).append(html);


///////////////// Example 2 ///////////////////////////////////
let lang_context = {"language" : "handlebars",
					"adjective" : "groovy"};

let template_language = $('#handleBars-language').html();
let template_language_script = Handlebars.compile(template_language);
let html_language = template_language_script(lang_context);
$(document.body).append(html_language);




// Handlebars can handle some logic
// {{#if boolean}}
// 	some content
// {{/if}}

/////////////// Example 3 /////////////////////////////////
let dev_context = {
  "occupation" : "developer",
  "website" : {
    "name" : "Nashville Software School"
  },
  "names" : [
    {"firstName" : "Max"},
    {"firstName" : "BrendAlong"},
    {"firstName" : "Gilbert"}
  ],
  "cities" : [" East Nashville, Franklin, Green Hills"]
};

let template_devs = $('#handleBars-devs').html();
let template_devs_script = Handlebars.compile(template_devs);
let html_devs = template_devs_script(dev_context);
$(document.body).append(html_devs);



////////////Example 4 ///////////////////////////////////
var voter_context = {
  "person":[
    {"name" : "Max", "year" : 1989},
    {"name" : "Alex" , "year" : 1987},
    {"name" : "Anna" , "year" : 1993},
    {"name" : "Kayla" , "year" : 2008},
    {"name" : "Pandora" , "year" : 2014}
  ]
}

Handlebars.registerHelper("voterStatus", function(year){
	if(year > 1998) {
		return "can not vote";
	} else {
		return "is a voter";
	}
});

Handlebars.registerHelper("increment", function(val){
	return parseInt(val) + 1;
})

let template_voter = $('#handleBars-voter').html();
let template_voter_script = Handlebars.compile(template_voter);
let html_voter = template_voter_script(voter_context);
$(document.body).append(html_voter);

























//extra space to scoll text to top