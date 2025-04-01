
// let heroes = ["ironman", "thor", "spiderman", "superman", "batman", "antman"];

// const myArray2 = new Array(1,2,3,4,5);
// console.log(myArray2[1]); // 2

const myArray = [0,1,2,3,4,5,6]
// Array Methods
// myArray.push(6); // 0,1,2,3,4,5,6,6
// myArray.push(7); // 0,,1,2,3,4,5,6,7
// myArray.pop(); // 0,1,2,3,4,5,6,6


// shallow copy of an object is a copy whose properties share the same references 
// [point to the same underlying values] as those of the source object from which the copy was made

// Deep copy of an object is a copy whose properties do not share the same refernces [point to the same underlying values]
// as those of the source object from which the copy was made 

// myArray.unshift(9); // 9,0,1,2,3,4,5,6,6
// myArray.shift();  // 0,1,2,3,4,5,6,6

// console.log(myArray.includes(9)); // false

// console.log(myArray.indexOf(19)); //-1 if not exist then -1 

// const newArr = myArray.join(); // adds all the elements of an array into a string 
// console.log(myArray);
// console.log(newArr); // 0,1,2,3,4,5,6
// console.log(typeof newArr); // string

//slice , splice
console.log("A ", myArray);

const myn1 = myArray.slice(1, 3)

console.log(myn1);
console.log("B ", myArray);


const myn2 = myArray.splice(1, 3)
console.log("C ", myArray);
console.log(myn2);