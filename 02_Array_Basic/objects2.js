// singelton : with the help of constructor
// if we create the objects using literal then the singelton is not made

// const tinderUser = new Object(); // singelton objection hain
const tinderUser = {}; // non singelton object hain 

tinderUser.id = "123abc";
tinderUser.name = "Aditya";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // { id: '123abc', name: 'Aditya', isLoggedIn: false }

const regularUser = {
    email: "aditya@gmail.com",
    fullname :{
        userfullname: {
            firstname : "Aditya",
            lastname : "Kunwar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname); // Aditya

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = { obj1, obj2 };
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// spread
const obj3 = {...obj1, ...obj2} // the best method o/p is { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3);

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Aditya', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Aditya' ], [ 'isLoggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true