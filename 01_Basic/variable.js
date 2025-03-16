console.log("Welcome to javascript programming language");

// variables 
fullName ="Tony stark"; // string value
console.log(fullName);
age=24 + "Stark"; //integer
console.log(age);

price=99.99; //float
console.log(price);

isFollow = false; // boolean only true and false accept
console.log(isFollow);

let a=10;
console.log(a);

const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])