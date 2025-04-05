class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const adi = new User("Aditya")
console.log(adi.createId()) // adi.createId is not a function

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

// const iphone = new Teacher("iphone", "i@phone.com")
// // iphone.logMe(); username is iphone
// console.log(iphone.createId()); // error