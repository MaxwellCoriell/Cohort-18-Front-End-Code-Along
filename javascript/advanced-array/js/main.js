// console.log("hello array methods");

// var colors = ["red", "blue", "yellow", "orange", "purple"];

// colors.forEach(function(item, tomato) {
// 	var newColorString = "I like this color" + item;
// 	console.log("newColorString", tomato, newColorString);
// });

// //same thing as above
// for (var i = 0; i < colors.length; i++){

// };

// // MAP AND FILTER
// // -MAP-
// var reversedColors = colors.map(function(color){
// 	console.log("split", color.split(""))
// 	return color.split("").reverse().join("");
// });

// //same as above
// var reversedColors = [];
// for (var i = 0; i < colors.length; i++) {
// 	var reversed = colors[i].split("").reverse().join("");
// 	reversedColors.push(reversed);
// 	console.log("reversedColors", reversedColors)
// }

// // -FILTER-
// var fourLetters = colors.filter(function(color){
// 	return color.length === 4;
	
// });

// console.log("fourLetters", fourLetters);

// //same as above
// var fourLetters = [];
// for (var i = 0; i < colors.length; i++) {
// 	if (colors[i].length === 4) {
// 		fourLetters.push(colors[i]);
// 	}
// }

// ARRAYS WITH NUMBERS

// var numbers = [51, 10, 62, 4, 13, 9];

// var sum = numbers.reduce(function(prev, curr){
// 	console.log("prev:", prev, "curr:", curr);
// 	return prev += prev;
// })

// console.log("sum", sum);


// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
// 	sum += numbers[i];
// };


//CHAINING THESE METHODS
//
/*instructions:
Sort the numbers in Descending order (10, 9, 8, 7, etc).
Remove any intergers greater than 19
Multiply each remaining number by 1.5 and then subtract 1.
Then output (console.log) the sum of ll the resulting numbers
*/
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var chainingResult = integers.sort(function(a, b) {return a - b}) //no semi-colons to chain the functions
.reverse()
.filter(function(num){return num < 19})
.map(function(num){return(num * 1.5 ) - 1 })
.reduce(function(prev, curr){return prev + curr});

console.log("chainingResult", chainingResult);



































