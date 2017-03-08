// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Delay equals time in milliseconds to wait until new quote is shown
var delay = 30000;
var intervalID = window.setInterval(printQuote, delay);

// Prints a random quote with a random background color
function printQuote() {
	var quoteObj = getRandomQuote();
	var quoteString = getHtmlString('p', 'quote', quoteObj.quote, true);
	var sourceString = getHtmlString('p', 'source', quoteObj.source, false);
	var citationString = '';
	var yearString = '';

	// Checks for optional properties, and creates proper strings if found
	if(quoteObj.hasOwnProperty('citation')) {
		citationString = getHtmlString('span', 'citation', quoteObj.citation, true);
	}
	if(quoteObj.hasOwnProperty('year')) {
		yearString = getHtmlString('span', 'year', quoteObj.year, true);
	}

	// Put all html strings together to print to the quote-box
	var html = quoteString.concat(sourceString, citationString, yearString, '</p>');
	print('quote-box', html);

	// Sets a new random background-color for the quote
	var color = getRandomColor();
	setBodyBackgroundColor(color);
}

function getRandomQuote() {
	// Loop through quotes checking if quote object has been displayed yet
	var displayedCount = 0;
	for(var i = 0; i < quotes.length; i++) {
		if(quotes[i].displayed === true)
			displayedCount += 1;
	}
	// if ALL quotes have been displayed, loop through quotes to reset all displayed flags
	if(displayedCount === quotes.length) {
		for(var i = 0; i < quotes.length; i++) {
			quotes[i].displayed = false;
		}
	}

	var randomNumber = Math.floor(Math.random() * quotes.length);
	// generate random numbers until index found represents quote that has not been displayed
	while(quotes[randomNumber].displayed === true) {
		randomNumber = Math.floor(Math.random() * quotes.length);
	}
	quotes[randomNumber].displayed = true;

	// Log quote to console for easy grading
	console.log(quotes[randomNumber].quote);
	
	// returns the randomly selected quote object
	return quotes[randomNumber];
}

// Abstracted print function will add innerHTML to the specified element
function print(id, message) {
	document.getElementById(id).innerHTML = message;
}

// Creates a valid HTML string based on the parameters
// Set isClosed to FALSE to omit the closing tag
function getHtmlString(tagName, className, content, isClosed) {
	var htmlString = '<' + tagName + ' class="' + className + '">' + content;
	if(isClosed)
		return htmlString.concat('</', tagName, '>');
	else
		return htmlString;
}

// Generates an rgb string with random values
function getRandomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// Sets the background-color property of the body element
function setBodyBackgroundColor(color) {
	document.body.style.backgroundColor = color;
}


