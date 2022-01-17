function Ninja(name){

    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    Ninja.prototype.sayName = function(){
        console.log("Name: " + name);
    }

    Ninja.prototype.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed  + ", Strength: " + strength)
    }

    Ninja.prototype.drinkSake = function(){
        this.health = this.health + 10;
    }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();