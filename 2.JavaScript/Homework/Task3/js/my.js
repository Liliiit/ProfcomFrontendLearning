var name = prompt('ваше имя');

document.write("Salut " + name);

var age = prompt('ваш возраст');

if(age > 0 && age <= 12){
	document.write(" vous êtes un enfant");
} else if(age >= 13 && age <= 17){
	document.write(" vous êtes un adolescent");
} else if(age >= 18 && age <= 30){
	document.write("  у вас сейчас самое сочное время))))000)))0))0))");
} else if(age >= 31 && age <= 45){
	document.write(" вам уже давно пора было все сделать!!");
} else if(age >= 60){
	document.write(" переезжайте в Италию, там пенсия 3000 евро в месяц ");
} 
else{
	document.write("\_('_')_/");
}




