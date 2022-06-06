class Vehicle {
    constructor(brand, color, licensePlate, highwayLicense) {
        this.brand = brand;
        this.color = color;
        this.licensePlate = licensePlate;
        this.highwayLicense = highwayLicense;
    }

    drive() {
        return this.constructor.name + " brand " + this.brand + " has the license plate " + this.licensePlate + ", the color " + this.color +
            " and is currently on the highway";
    }
}

class Car extends Vehicle {
    constructor(brand, color, licensePlate) {
        super(brand, color, licensePlate);
        this.highwayLicense = true;
    }
}

class Motorcycle extends Vehicle {
    constructor(brand, color, licensePlate) {
        super(brand, color, licensePlate);
        this.highwayLicense = true;
    }
}

class Bus extends Vehicle {
    constructor(brand, color, licensePlate) {
        super(brand, color, licensePlate);
        this.highwayLicense = true;
    }
}

class Truck extends Vehicle {
    constructor(brand, color, licensePlate) {
        super(brand, color, licensePlate);
        this.highwayLicense = true;
    }
}

class Bicycle extends Vehicle {
    constructor(brand, color) {
        super(brand, color);
        this.licensePlate = "";
        this.highwayLicense = false;
    }
}

class Cart extends Vehicle {
    constructor(brand, color) {
        super(brand, color);
        this.licensePlate = "";
        this.highwayLicense = false;
    }
}

class Highway {
    constructor(...vehicles) {
        this.acceptedVehicles = [];
        this.acceptVehicle(vehicles);
    }

    acceptVehicle(vehicles) {
        vehicles.forEach((vehicle) => {
            if (vehicle.highwayLicense) {
                this.acceptedVehicles.push(vehicle);
                console.log("A " + vehicle.constructor.name.toLowerCase() + " can enter the highway");
            } else {
                console.log("A " + vehicle.constructor.name.toLowerCase() + " can't enter the highway");
            }
        });
    }

    listVehicles() {
        this.acceptedVehicles.forEach((vehicle) => {
            console.log(vehicle.drive());
        });
    }
}

let vehicle1 = new Car("Mercedes", "red", "GL01ABC");
let vehicle2 = new Motorcycle("Yamaha", "black", "GL12BCD");
let vehicle3 = new Bus("Volvo", "green", "GL23CDE");
let vehicle4 = new Truck("Saab", "blue", "GL34DEF");
let vehicle5 = new Bicycle("Ktm", "white");
let vehicle6 = new Cart("HomeMade", "gray");

let hway = new Highway(vehicle1, vehicle2, vehicle3, vehicle4, vehicle5, vehicle6);
hway.listVehicles();