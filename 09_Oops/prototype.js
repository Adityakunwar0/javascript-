// let myName = "aditya   "
// ley myNickName = "Chotu   "

// console.log(myName.trueLength);

// let myHero = ["thor", "spiderman"];
// let heroPower = {
//     thor: "hammer",
//     spiderman: "siling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }
// Object.prototype.aditya =function(){
//     console.log("Aditya is present in all objects")
// }
// Array.prototype.heyaditya = function(){
//     console.log(`Aditya says hello`);
// }
// //heroPower.aditya(); //Aditya is present in all objects
// myHero.aditya() // Aditya is present in all objects
// myHero.heyaditya(); // Aditya says hello
// heroPower.heyaditya() // access is not provided 

// //inheritance
// const User = {
//   name :"Aditya",
//   email: "Aditya@google.com"
// }
// const Teacher = {
//     makeVideo: true
// }
// const TeachingSupport = {
//     isAvailable: false
// }
// const TASupport = {
//     makeAssgnemnet : "js assignment",
//     fullTime: true,
//     __proto__: TeachingSupport
// }
// Teacher.__proto__ = User

//moderSyntax
// Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUSerName = "AdityaKunwar    "
String.prototype.trueLength = function(){
console.log(`${this}`) // AdityaKunwar
console.log(`${this.name}`) // undefined
console.log(`True length is : ${this.trim().length}`) // True length is : 12
}
anotherUSerName.trueLength()
