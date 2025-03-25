const marvel_heroes = ["thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes); // [ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes[3][1]); // flash

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes); //  [ 'thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'batman' ]

// spread
// const all_new_heros  = [...marvel_heroes, ...dc_heroes]  
// console.log(all_new_heros); // [ 'thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'batman' ]


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity) 
// console.log(real_another_array); //[ 1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

console.log(Array.isArray("Hitesh")) // false because it is not an array
console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting o/p: []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]