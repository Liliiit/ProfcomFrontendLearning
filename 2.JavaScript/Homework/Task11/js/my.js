function makePhrases(){
	var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
	var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
	var years = [1955, 1957, 1948, 1954, 1961];
	var colors = ["red", "blue", "tan", "yellow", "white"];
	var convertible = [true, false];

	var rand1 = Math.floor(Math.random() * makes.length);
	var rand2 = Math.floor(Math.random() * models.length);
	var rand3 = Math.floor(Math.random() * years.length);
	var rand4 = Math.floor(Math.random() * colors.length);
	var rand5 = Math.floor(Math.random() * convertible.length);

	var phrase = "makes: " + makes[rand1] + ' ' + "models: " + models[rand2] + ' ' + "years: " + years[rand3] + 
	"colors: " + colors[rand4] + ' ' + "convertible: " + convertible[rand5];
	alert(phrase);
}

makePhrases();