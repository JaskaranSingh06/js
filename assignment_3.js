class Car {
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    
    displayCarDetails = () =>{
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Color: ${this.color}`);
    }

    changeCarColor = (newColor) =>{
        this.color = newColor;
        console.log(`Car color changed to ${newColor}.`);
    }
}

const car = new Car('BMW', 'X4', '2022', 'Black')
//Display the initial details of the car
console.log('Car Details:');
car.displayCarDetails();

//Changing the color of the car
car.changeCarColor('White');

//Display the car details after changing the color of the car
console.log("Car Details after changing the color: ")
car.displayCarDetails();
