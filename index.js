'use strict';

function Car(manufacturer, model, releaseYear, color, fuelconsumption, volume, speed, maxspeed) {
   // debugger;
        this.manufacturer = manufacturer;
        this.model = model;
        this.releaseYear = releaseYear;
        this.color = color;
        this.fuelconsumption = fuelconsumption;
        this.volume = volume;
       this.speed = speed;
       this.maxspeed = maxspeed;
   };

function CarPrototype() {
  this.drive = function() {
    if(this.speed < this.maxspeed) {
      this.speed = this.speed + 10
      return this.speed;
    }else {
      return this.speed;
    };
  }
  this.breaking = function () {
    if(this.speed <= this.maxspeed) {
      this.maxspeed = this.maxspeed - 10;
      return this.maxspeed
  }else{ 
    return this.speed;
  }
}
  this.stop = function() {
    return 0
  }
};

const carPrototype = new CarPrototype();
Car.prototype = carPrototype;

     
   const car1 = new Car('Mersede', 'Sprinter', 2001, 'black', 12, 100, 0, 160)
  