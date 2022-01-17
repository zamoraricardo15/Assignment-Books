function Ninja(name, health=100){
	this.name = name;
	this.health = health;
	var speed = 3;
	var strength = 3;

	this.sayName = function(){
		console.log("Name: " + this.name);
	}

	this.showStats = function(){

		console.log("Name: " + this.name);
		console.log("Health: " + this.health);

		console.log("Speed: " + speed);
        
		console.log("Strength: " + strength);
	}

	this.punch = function(opponent){
      if(!(opponent instanceof Ninja)){

			console.log(opponent + " not a Ninja");
		}
		opponent.health -= 5;
		console.log(opponent.name + " was punched by " + this.name + " and lost 5 health!");
	}

	this.kick = function(opponent){
		if(!(opponent instanceof Ninja)){
			console.log(opponent + " not a Ninja");
		}
		else{
			opponent.health -= strength * 15;
			console.log(opponent.name + " was kicked by " + this.name + " and lost " + (strength * 15) + " health!");
		}
	}
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
