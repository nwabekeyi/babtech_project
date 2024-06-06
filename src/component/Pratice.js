// string
// Number
// Boolean
// undefined
// NaN
// null
// Array
// object

// var array = ['a', 'b', 'c', 'd', 'e', 'f',]
// console.log(array)




// let object = ['melody', 'chidi', 'queen', 'king', 'micheal', ];
// console.log(object)



// let arr = [1, 2, 3];
// console.log(arr)

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers)


// // Define objects for car, house, and table
// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020,
//     color: 'blue'
// };

// const house = {
//     type: 'Colonial',
//     bedrooms: 4,
//     bathrooms: 2,
//     address: '123 Main St'
// };

// const table = {
//     material: 'wood',
//     shape: 'rectangular',
//     dimensions: {
//         length: 60,
//         width: 30,
//         height: 30
//     }
// };






function addition(a, b) {
    return a + b;
}

console.log(addition(5, 3)); 




function collection(){
    console.log("you have called me") 
};

collection()





function nation(a, b){
    return a + b
};

console.log(nation(4, 5));




function connection(){
    console.log("i want you, i need you") 
};

connection()

console.log(addition(4, 5))



const calculator = {
    addition: function(a, b) {
        return a + b;
    }
};

console.log(calculator.addition(5, 3)); 




const coke = {
    addition: function(c, d) {
        return c + d;
    }
};

console.log(coke.addition(6, 7)); // Output: 13










// console.log("Car make:", car.make);
// console.log("House type:", house.type);
// console.log("Table dimensions:", table.dimensions);




// // Define an array of house objects
// const houses = [
//     { id: 1, name: 'Victorian', price: 200000 },
//     { id: 2, name: 'Colonial', price: 250000 },
//     { id: 3, name: 'Ranch', price: 180000 }
// ];

// // Example using array methods

// // 1. Find a house by id
// const findHouseById = (id) => houses.find(house => house.id === id);

// console.log("House with id 2:", findHouseById(2));

// // 2. Filter houses by price range
// const filterHousesByPriceRange = (minPrice, maxPrice) => houses.filter(house => house.price >= minPrice && house.price <= maxPrice);

// console.log("Houses between $180,000 and $220,000:", filterHousesByPriceRange(180000, 220000));

// // 3. Map the names of all houses
// const mapHouseNames = () => houses.map(house => house.name);

// console.log("Names of all houses:", mapHouseNames());

// // 4. Check if a specific house exists
// const doesHouseExist = (id) => houses.some(house => house.id === id);

// console.log("Does house with id 4 exist?", doesHouseExist(4));

