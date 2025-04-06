const User = {
    _email: "Adi@gmail.com",
    _password: "Abc",

    get email(){
       return this._email.toUpperCase(); 
    },
    set email(value){
        this.email = value;
    }
}
const adi = Object.create(User);
console.log(adi.email); // ADI@GMAIL.COM
