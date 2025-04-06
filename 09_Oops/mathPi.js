// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter); o/p : {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const adi = {
    name: 'aditya',
    class: 1,
    isAvailable: true,

    orderCourse: function(){
        console.log("course nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(adi, "name"));

Object.defineProperty(adi, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(adi, "name")); 

for (let [key, value] of Object.entries(adi)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`); // name : aditya class : 1 isAvailable : true
    }
}