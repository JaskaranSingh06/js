class FruitBasket{
    constructor(){
        this.fruits = ["apple", "banana", "orange", "grape", "kiwi"];
    }

    displayFruits(){
        for(let i=0; i<this.fruits.length; i++){
            console.log(this.fruits[i]);
        }
    }

    addFruit(newFruit){
        this.fruits.push(newFruit);
        console.log(`${newFruit} added to the basket`);
    }

    removeFruit(fruitToRemove){
        const index = this.fruits.indexOf(fruitToRemove);
        if (index !== -1) {
            this.fruits.splice(index, 1);
            console.log(`${fruitToRemove} removed from the basket.`);
        }else{
            console.log(`${fruitToRemove} is not in the basket.`);
        }
    }
}

const basket = new FruitBasket();
// Call the displayFruits function to display the initial array of fruits
console.log("Initial array of fruits:");
basket.displayFruits();

// Add a new fruit to the array
var newFruit = "mango";
basket.addFruit(newFruit);

// Call the displayFruits function again to display the updated array of fruits
console.log("Updated array of fruits after adding a new fruit:");
basket.displayFruits();

// Remove a fruit from the array
console.log("\nRemoving 'banana' from the basket:");
basket.removeFruit("banana");

// Call the displayFruits function again to display the updated array of fruits
console.log("Updated array of fruits after removing a fruit:");
basket.displayFruits();