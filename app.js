/*********** Part One ***********/

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    };
    honk() {
        return "Beep.";
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
};

//let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);


/*********** Part Two ***********/

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);

        this.numWheels = 4;
    }
}

//let myFirstCar = new Car("Toyota", "Corolla", 2005);


/*********** Part Three ***********/

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super( make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!";
    }
}

//let myFirstMotocycle = new Motorcycle("Honda", "Nighthawk", 2000);


/*********** Part Four ***********/

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle) {
        if(!(vehicle instanceof Vehicle)) {
            return "Only vehicles are allowed here!";
        } else if (this.capacity > 0) {
            this.vehicles.push(vehicle);
            this.capacity -= 1;
            return "Vehicle added!";
        } else {
            return "Sorry we're full.";
        }
    }
}
