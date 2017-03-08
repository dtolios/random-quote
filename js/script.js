// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// quotes array stores quote object
// quote object has optional 'citation' and 'year' properties
var quotes = [
	{
		quote: 'I think I must have one of those faces you can\'t help believing.', 
		source: 'Norman Bates'
	},
	{
		quote: 'So much time and so little to do. Wait a minute. Strike that. Reverse it. Thank you.',
		source: 'Willy Wonka',
		year: 1971
	},
	{
		quote: 'Adrian!',
		source: 'Rocky Balboa',
		citation: 'Rocky'
	},
	{
		quote: 'The rich getting richer, that\'s the law of the land.',
		source: 'Dave Moss',
		citation: 'Glengarry Glen Ross',
		year: 1992
	},
	{
		quote: 'Are you gonna bark all day, little doggie, or are you gonna bite?',
		source: 'Mr. Blonde',
		citation: 'Reservoir Dogs',
		year: 1992
	},
	{
		quote: 'That\'s a Smith & Wesson, and you\'ve had your six.',
		source: 'James Bond', 
		citation: 'Dr. No',
		year: 1962
	},
	{
		quote: 'O Captain, my Captain. Who knows where that comes from? Anybody? Not a clue? It\'s from a poem by Walt Whitman about Mr. Abraham Lincoln. Now in this class you can either call me Mr. Keating, or if you\'re slightly more daring, O Captain my Captain.',
		source: 'John Keating',
		citation: 'Dead Poets Society',
		year: 1989
	},
	{
		quote: 'Look, Daddy. Teacher says, every time a bell rings an angel gets his wings.',
		source: 'Zuzu Bailey',
		citation: 'It\'s a Wonderful Life',
		year: 1946
	},
	{
		quote: 'You met me at a very strange time in my life.',
		source: 'Narrator',
		citation: 'Fight Club',
		year: 1999
	},
	{
		quote: 'I\'m trying to free your mind, Neo. But I can only show you the door. You\'re the one that has to walk through it.',
		source: 'Morpheus',
		citation: 'The Matrix',
		year: 1999
	}
];

function getRandomQuote() {
	// selects a random quote object from the quotes array
	var randomNumber = Math.floor(Math.random() * quotes.length)
	// returns the randomly selected quote object
	return quotes[randomNumber];
}

function print(message) {
	document.getElementById('quote-box').innerHTML;
}

function printQuote() {
	// call getRandomQuote and store in object var
	var quote = getRandomQuote();
	// construct a string containing the different properties of the quote object
	var quoteString = '<p class="quote">' + quote.quote + '</p>';
	var sourceString = '<p class="source">' + quote.source;
	var citationString = '';
	var yearString = '';

	if(quote.hasOwnProperty('citation')) {
		citationString = '<span class="citation">' + quote.citation + '</span>';
	}
	if(quote.hasOwnProperty('year')) {
		yearString = '<span class="year">' + quote.year + '</span>';
	}
	var html = quoteString + sourceString + citationString + yearString;
	document.getElementById('quote-box').innerHTML = html;
}