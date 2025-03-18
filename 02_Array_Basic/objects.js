// object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Aditya Kunwar",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "aditya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // aditya@google.com
// console.log(JsUser["email"]) // adityagoogle.com
// console.log(JsUser["full name"]) // Aditya Kunwar
// console.log(JsUser[mySym]) // mykey1

JsUser.email = "aditya@chatgpt.com"
// Object.freeze(JsUser) // freeze the all key value of objects
JsUser.email = "aditya@microsoft.com"
// console.log(JsUser); 

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); //Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user, aditya