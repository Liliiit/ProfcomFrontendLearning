/*
function chechStudent(name, age){
	if (age > 17) {
		console.log(name + " уже окончил школу");
	} else {
		console.log(name + " еще учится в школе");
	}
}

chechStudent('Nick', 23);
chechStudent('Make', 13);
chechStudent('Kate', 53);
chechStudent('Pit', 17);
*/
function youDo(Name, cl){
	var message = Name + ", учится еще "  + (11 - cl) + " лет";
	return message;
}

var status = youDo('Pit', 5);
console.log(status);