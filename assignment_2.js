function calculateArea(length, width){
    return length * width;
}

function calculateVolume(length, width, heigth){
    return length * width * heigth;
}

//Call the calculateArea function to calculate the area of rectangle
console.log('Area of rectangle: ' + calculateArea(7, 6));

//Call the calculateVolume function to calculate the volume of rectangular prism
console.log('Volume of rectangular prism: ' + calculateVolume(3, 5, 4));