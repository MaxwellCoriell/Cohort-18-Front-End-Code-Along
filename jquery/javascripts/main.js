"use strict";

//make sure your files are connected
console.log("hello jqueryStarter Script!") ;

$(document).ready(function (){
	/* all the jquery code goes here */

////////////// Select by id ////////////////

	// jQuery *always* returns an array of 
	  // elements, EVEN when there's only ONE
	  //
	  // vanilla
	  var topArticle = document.getElementById("top-article");
	  // jQuery
	  var article = $("#top-article");

	  console.log("topArticle", topArticle);
	  console.log("article", article[0]);

////////////// Select by id ////////////////
	// plain

	  var allButtons = document.getElementsByTagName("button");
	  console.log("allButtons by TagName", allButtons);
	// remember ths returns an array
	  var button = $("button");
	  console.log("button", button.html());


////////////// Select by class ////////////////
	// vanilla
	  var mainArticles = document.getElementsByClassName("article--main");
	  console.log("mainArticles", mainArticles);
	// jQuery
	  $(".article--main").each(function(tomato, currentElement) {
		 console.log(tomato,$(currentElement).html());
	  });

////////////// Select by class ////////////////

	  var umbreAllaElement = $("h1[umbrella='open']");
	  console.log("umbrella text: ", umbreAllaElement.html());

	//Select children
	  console.log("all children: ", $(".container").children()); //There are two children

	//Select specific children
	  console.log("the h1: ", $(".container").children("h1"));
	  console.log("the section: ", $(".container").children("section"));

	//Select specific child index (useful for ul/ol)
	//Example of chaining selectors 
	  console.log("third li: ", $("#letters").children(".letter").eq(2).html());

	//Finding parent DOM elements
	  console.log("fiding parent DOM element", $(".album").parents(".song-container").attr("index"));

////////////// Finding an element ////////////////
	
	  var album = $(".container").find(".album");
	  console.log("album", album, album.html());

	  function functionIWantjQueryToExecute(songList) {
        console.log(songList.songs);

        for (var i = 0; i < songList.songs.length; i++) {
          var currentSong = songList.songs[i];
          $("#list-of-songs").append("<h1>"+ currentSong.title +"</h1>");
          $("#list-of-songs").append("<div>Performed by " + currentSong.artist + "</div>");
          $("#list-of-songs").append("<div>On the album " + currentSong.album + "</div>");
        }
     }




	$.ajax({
	  url:"javascripts/songs.json"
	}).done(functionIWantjQueryToExecute);


});












