let car = {
    make:'BMW',
    model:'X4',
    year:'2023',
    color:'Black'
}

function displayCarDetails(carObj){
    console.log('Make: ' + carObj.make);
    console.log('Model: ' + carObj.model);
    console.log('Year: ' + carObj.year);
    console.log('Color: ' + carObj.color);
}

function changeCarColor(car, newColor){
    car.color = newColor;
}
//Display the initial details of the car
console.log('Car Details:');
displayCarDetails(car);

//Changing the color of the car
changeCarColor(car, 'White');

//Display the car details after changing the color of the car
console.log("Car Details after changing the color: ")
displayCarDetails(car);
