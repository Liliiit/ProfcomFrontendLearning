var kitty = {
	animal: "Cat",
	pow: 4,
	year: 3,
	coat_color: "ginger",
	eye_color: "green",
	hungry: 0,
	fav_food: "little mice",
	
	eat: function() {
		if (this.hungry == 0) {
		alert("Кот голоден.");
		} else {
		alert("Кот сыт на " + this.hungry + "kkal");
		}
	},
	
	addEat: function(amount){
		this.hungry = this.hungry + amount;
	},
	
	sleep: function(){
		if (this.hungry != 0 && this.hungry > 0){
			this.hungry = this.hungry - 100;
			alert("Кот спит.");
		} else {
			alert("КАЛМИ МЕНЯ");
		}
		
	}
	
};

var doggy = {
	make: "Dog",
	pow: 4,
	year: 7,
	coat_color: "black&white",
	eye_color: "blue",
	fav_food: "steak"
};

kitty.eat();
kitty.addEat(300);
kitty.sleep();
kitty.sleep();
kitty.sleep();
kitty.sleep();