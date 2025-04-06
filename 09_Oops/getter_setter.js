class User{
    constructor(email, password){
        this.email = email;
        this.password =  password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email (value){
        this._email = value
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value.toUpperCase();
    }
}
const adi = new User("adi@gmail.com", "123");
const aman = new User("adi@gmail.com", "abc");
console.log(adi.password); // 123
console.log(aman.password); // ABC
console.log(adi.email) // ADI@GMAIL.COM