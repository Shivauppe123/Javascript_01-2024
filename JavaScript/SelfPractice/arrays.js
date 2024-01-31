console.log("=================Arrays=========================");
// An array is a special variable, which can hold more than one value:

const cars = ["Tata Altroz", "Volvo", "BMW"];
console.log(cars)

// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

/*
However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.
*/
const car = [
    "Saab",
    "Volvo",
    "BMW"
  ];
console.log(car)


// You can also create an array, and then provide the elements:

const cars1 = [];
cars1[0]= "Saab";
cars1[1]= "Volvo";
cars1[2]= "BMW";

console.log(cars1)


// The following example also creates an Array, and assigns values to it:

const models = new Array("Toyota", "Volvo", "BMW");
console.log(models)

//Accessing Array Elements
//You access an array element by referring to the index number:

const fourwheeler = ["Saab", "Volvo", "BMW"];
let fourwheeler1 = fourwheeler[0];

console.log(fourwheeler1)

//Changing an Array Element
// This statement changes the value of the first element in cars:

cars[0] = "Opel";

console.log(cars)


const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits

console.log(fruits)



const fruit = ["Banana", "Orange", "Apple"];
fruit[6] = "Lemon";  // Creates undefined "holes" in fruits

console.log(fruit)
/*

Associative Arrays
Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes. 
*/
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"

console.log(person)
console.log(person[0])
console.log(person.length)


/*
WARNING !!
If you use named indexes, JavaScript will redefine the array to an object.

After that, some array methods and properties will produce incorrect results.
*/




const person1 = [];
person1["firstName"] = "John";
person1["lastName"] = "Doe";
person1["age"] = 46;
person1.length;     // Will return 0
person1[0];         // Will return undefined


console.log(person1)
console.log(person1[0])
console.log(person1.length)