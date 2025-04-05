// es6
// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword (){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const adi = new User("Aditya", "aditya@gmail.com", "123");
// console.log(adi.encryptPassword()); //123abc
//  console.log(adi.changeUsername()); //ADITYA

 // behind the scene 
 function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
 }
 User.prototype.encryptPassword = function(){
    return `${this.password}abc`
 }
 User.prototype.changeUsername = function(){
   return `${this.username.toUpperCase()}`
 }
 const aman = new User("aman", "aman@gmail.com", "123");
 console.log(aman.encryptPassword()); //123abc
 console.log(aman.changeUsername()); //AMAN
