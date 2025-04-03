// function one() {
//     const username = "Aditya";
//     function two(){
//         const website = "youtube";
//         console.log(username);
//     }
//    // console.log(website); // error
//     two(); // Aditya

// }
// //one(); execute nahi hoga
if(true){
    const username = "Aditya"
    if (username === "Aditya"){
        const website = " Youtube";
        // console.log(username + website); // Aditya Youtube
    }
   // console.log(website); // error beacuse website scope is in inside if case

}
// console.log(username); // error


// +++++++++++++++++ Interesting +++++++++++++++++++++
// console.log(addone(5)); // 6

// function addone(num){
//     return num + 1
// }
// addone(5); // not error

console.log(addTwo(5)); // Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num +2
}

