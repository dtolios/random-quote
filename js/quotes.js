// quotes array must be accessible from global scope per Treehouse spec
// quotes array stores quote object
// quote object has optional 'citation' and 'year' properties
// tags property added for further categorization
var quotes = [
	{
		quote: 'I think I must have one of those faces you can\'t help believing.', 
		source: 'Norman Bates',
		tags: ['Horror', 'Thriller', 'Classic'],
		displayed: false
	},
	{
		quote: 'So much time and so little to do. Wait a minute. Strike that. Reverse it. Thank you.',
		source: 'Willy Wonka',
		year: 1971,
		tags: ['Comedy', 'Family', 'Classic'],
		displayed: false
	},
	{
		quote: 'Adrian!',
		source: 'Rocky Balboa',
		citation: 'Rocky',
		tags: ['Drama', 'Classic'],
		displayed: false
	},
	{
		quote: 'The rich getting richer, that\'s the law of the land.',
		source: 'Dave Moss',
		citation: 'Glengarry Glen Ross',
		year: 1992,
		tags: ['Drama', 'Strong Language'],
		displayed: false
	},
	{
		quote: 'Are you gonna bark all day, little doggie, or are you gonna bite?',
		source: 'Mr. Blonde',
		citation: 'Reservoir Dogs',
		year: 1992,
		tags: ['Drama', 'Strong Language', 'Violent'],
		displayed: false
	},
	{
		quote: 'That\'s a Smith & Wesson, and you\'ve had your six.',
		source: 'James Bond', 
		citation: 'Dr. No',
		year: 1962,
		tags: ['Drama', 'Action', 'Classic'],
		displayed: false
	},
	{
		quote: 'O Captain, my Captain. Who knows where that comes from? Anybody? Not a clue? It\'s from a poem by Walt Whitman about Mr. Abraham Lincoln. Now in this class you can either call me Mr. Keating, or if you\'re slightly more daring, O Captain my Captain.',
		source: 'John Keating',
		citation: 'Dead Poets Society',
		year: 1989,
		tags: ['Drama', 'Heartfelt'],
		displayed: false
	},
	{
		quote: 'Look, Daddy. Teacher says, every time a bell rings an angel gets his wings.',
		source: 'Zuzu Bailey',
		citation: 'It\'s a Wonderful Life',
		year: 1946,
		tags: ['Drama', 'Family', 'Heartfelt', 'Classic'],
		displayed: false
	},
	{
		quote: 'You met me at a very strange time in my life.',
		source: 'Narrator',
		citation: 'Fight Club',
		year: 1999,
		tags: ['Thriller', 'Drama', 'Violent', 'Strong Language'],
		displayed: false
	},
	{
		quote: 'I\'m trying to free your mind, Neo. But I can only show you the door. You\'re the one that has to walk through it.',
		source: 'Morpheus',
		citation: 'The Matrix',
		year: 1999,
		tags: ['Blockbuster', 'Action', 'Violent', 'Strong Language'],
		displayed: false
	}
];