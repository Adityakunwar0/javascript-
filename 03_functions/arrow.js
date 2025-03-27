const user = {
    username: "Aditya",
    price: 5789,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this); // {username: 'Aditya',price: 5789, welcomeMessage: [Function: welcomeMessage] }
    }
}
// user.welcomeMessage // not print anythings
// user.welcomeMessage() // Aditya , welcome to website
// user.username = "aman";
// user.welcomeMessage(); // aman , welcome to website

// console.log(this); // {}

// function chai(){
//     let username = "Aditya"
//     console.log(this.username); // undefined
// }
// chai();

// const chai  = function chai(){
//     let username = "Aditya"
//     console.log(this.username); // undefined
// }
// chai();

// Arrow function

// const chai  = () => {
//     let username = "Aditya"
//     console.log(this.username);  // undefined
//     console.log(this) // {}
// }
// chai();

// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3,4)) //7

// implicit return == we dont need return in function
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);

// console.log(addTwo(3,4)); // 7




