let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

function displayFruits(fruits){
    for(let i=0; i<fruits.length; i++){
        console.log(fruits[i]);
    }
}

function addFruit(fruits, newFruit){
    fruits[fruits.length] = newFruit;
}

function removeFruit(fruits, removeFruit){
    let index = fruits.indexOf(removeFruit);
    if (index !== -1) {
        fruits.splice(index, 1);
    }
}

// Call the displayFruits function to display the initial array of fruits
console.log("Initial array of fruits:");
displayFruits(fruits);

// Add a new fruit to the array
var newFruit = "mango";
addFruit(fruits, newFruit);

// Call the displayFruits function again to display the updated array of fruits
console.log("Updated array of fruits after adding a new fruit:");
displayFruits(fruits);

// Remove a fruit from the array
removeFruit(fruits, "banana");

// Call the displayFruits function again to display the updated array of fruits
console.log("Updated array of fruits after removing a fruit:");
displayFruits(fruits);