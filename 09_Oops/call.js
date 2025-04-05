function SetUsername(username){
    //complex db calls
    this.username = username
    console.log("called"); // only called run
}
function createUser(username, email, password){
    SetUsername.call(this,username); //createUser {username: 'aditya',email: 'aditya@fb.com',password: '123'}

    this.email = email
    this.password = password
}
const adi = new createUser("aditya", "aditya@fb.com","123");
console.log(adi); // createUser { email: 'aditya@fb.com', password: '123' }
