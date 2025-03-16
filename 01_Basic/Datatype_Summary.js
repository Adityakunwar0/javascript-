// // primitive data type : call by value
// // 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// // dynamical type data type is javascript



// const score = 100;
// const scoreValue = 100.3;
// const isLoggedIn = false;
// const outsideTemp = null; // ==> type of objects

// let userEmail;

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id === anotherId); // false

// const BigInt = 32467876347898965696557780n;

// // Reference ( Non primitive )
// // Array, objects, functions

// const heroes = ["shaktiman", "naagraaj", "doga"]
// let myObj = {
//     name: "Aditya",
//     age: 24
// }


// const myFunction = function(){
//     console.log("hello world"); // ==> type of object function
// }

// stack memory : Primitive, Heap (non-primitive)

let myName = "Aditya";

let anothername = myName;
anothername = "Chotu";


console.log(myName);
console.log(anothername);

let userOne = {
    email: "Aditya@gmail.com",
    upi: "438795069@ybl"
}

let userTwo = userOne;
userTwo.email = "chotu@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);