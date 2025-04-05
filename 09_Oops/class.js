// objects literal
const user = {
    username: "aditya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// constructor function => 
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("aditya", 12, true)
const userTwo = new User("aman", 11, false)
console.log(userOne.constructor); // [function: User]
//console.log(userTwo);

// instanceOf
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);
console.log(auto instanceof Car);
// o/p true
console.log(auto instanceof Object);
// o/p true