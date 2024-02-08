const quotes = [
	{
		text: "The only way to do great work is to love what you do. - Steve Jobs",
		author: "Steve Jobs"
	},
	{
		text: "Believe you can and you're halfway there. - Theodore Roosevelt",
		author: "Theodore Roosevelt"
	},
	{
		text: "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
	 author: "Sam Levenson"
	},
	{
		text: "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
		author: "Unknown"
	},
	{
		text: "Dream bigger. Do bigger. - Unknown",
		author: "Unknown"
	}
];

function getRandomQuote() {
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	return randomQuote;
}

function getNewQuote() {
	const quote = getRandomQuote();
	document.getElementById("text").innerText = quote.text;
	document.getElementById("author").innerText = quote.author;
}

document.getElementById("new-quote").addEventListener("click", getNewQuote);

getNewQuote();