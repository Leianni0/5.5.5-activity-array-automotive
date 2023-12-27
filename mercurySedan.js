//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
// class Car extends Vehicle
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
            this.maximumPassaengers = 5;
            this.passengers = 0;
            this.numberOfWheels = 4;
            this.maximumSpeed = 100;
            this.fuel = 10;
            this.scheduleService = false;
    }
}
// Load Passenger
loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
        if ((num + this.passenger) <= this.maxPassengers) {
            this.passenger = num;
            return this.passenger;               
        } else {
            console.log(this.model + " " + this.make + " not have enough space to take all passengers.");

        }
    } else {
        console.log(this.model + " " + this.make + " is full");
    }
}
// Start 
start() {
    if (this.fuel > 0) {            
        console.log("engine has started.");
        return this.started = true
    } else {
        console.log("no fuel");
        return this.started = false;
    }
}
// Schedule Service
scheduledService(){
    if (this.mileage > 30000) {            
        this.scheduleService = true
        return this.scheduleService;                       
    }
}

// Testing
let myCar = new Car('Ford', 'truck', '2020', 'blue', 10000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)

let myCar = new Car('Nissian', 'SUV', '2019', 'silver', 25100)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)
