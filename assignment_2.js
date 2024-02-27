class Geometry {
    calculateArea(length, width) {
        return length * width;
    }

    calculateVolume(length, width, height) {
        return length * width * height;
    }
}

const geometry = new Geometry();

// Calculate area of a rectangle
const rectangleArea = geometry.calculateArea(6, 7);
console.log("Area of the rectangle:", rectangleArea);

// Calculate volume of a rectangular prism
const prismVolume = geometry.calculateVolume(3, 5, 4);
console.log("Volume of the rectangular prism:", prismVolume);
