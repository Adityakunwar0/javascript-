function sayMyName(){
    console.log("A");
    console.log("d");
    console.log("i");
    console.log("t");
    console.log("y");
    console.log("a");
}
// sayMyName // this is only the reference so we will not get the output
// sayMyName(); // it will execute and give the output

// function addTwoNumbers(number1, number2){ // parameters
//    console.log( number1 + number2);
// }
// addTwoNumbers(); //NaN
// addTwoNumbers(3, 4); // 7 // 3,4 are arguments

function addTwoNumbers(number1, number2){ // parameters
    // let result = number1 + number2;
    // return result;
    return number1 + number2; // simple method and save the space
}

// const result = addTwoNumbers(3,5)
// console.log("Result: ", result); // Result:  8

// function loginUserMessage(username){
//     return `${username} just logged in`;
// }

// console.log(loginUserMessage("hitesh")); // hitesh just logged in
// console.log(loginUserMessage("")); //  just logged in
// console.log(loginUserMessage()); // undefined just logged in

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`;
// }

// console.log(loginUserMessage()); // please enter a username undefined

// function loginUserMessage(username = "Aditya"){
//     return `${username} just logged in`;
// }
// console.log(loginUserMessage()); //Aditya just logged in

// console.log(loginUserMessage("Aman")); // Aman just logged in override the value
    
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 300, 400, 500, 1000)); // [ 200, 300, 400, 500, 1000 ]

// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 300, 400, 500, 1000)); // [ 400, 500, 1000 ]

// const user = {
//     username: "Aditya",
//     price: 324
// }
// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// // handleObject(user);  // username is Aditya and price is 324

// handleObject({
//     username : "Aman", // username is Aman and price is 789
//     price: 789
// })

// const myNewArray = [200,300,400,500]
// function returnSecondValue(getArray){
//     return getArray[1]
// }
// // console.log(returnSecondValue) //[Function: returnSecondValue]
// console.log(returnSecondValue(myNewArray)); // 300

// function returnSecondValue(getArray){
//     return getArray[1]
// }
// console.log(returnSecondValue([200,400,500,600])); // 400

