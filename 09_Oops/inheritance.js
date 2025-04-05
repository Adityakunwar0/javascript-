class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const adi = new Teacher("aditya", "aditya@teacher.com", "123")

// adi.addCourse() // A new course was added by aditya

const chotu = new User("Chotu")
// chotu.addCourse()// not access
// chotu.logMe(); // USERNAME is Chotu
console.log(adi === chotu) //  false
// console.log(adi instanceof Teacher); // true