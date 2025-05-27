let myDate = new Date();

// console.log(myDate); // 2025-03-16T16:52:01.328Z
// console.log(myDate.toString()); // Sun Mar 16 2025 16:52:01 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Sun Mar 16 2025
// console.log(myDate.toISOString()); // 2025-03-16T16:52:01.328Z
// console.log(myDate.toLocaleDateString()); // 3/16/2025
// console.log(myDate.toLocaleString()); // 3/16/2025, 4:52:01 PM

// console.log(typeof myDate); // objects

// let myCreateDate =  new Date(2025, 2, 16); // month start from 0 so here 2 represent march
// console.log(myCreateDate.toDateString()); // sun mar 16 2025

// let myCreateDate =  new Date(2025, 2, 16,10, 27); // 3/16/2025, 10:27:00 AM 
// console.log(myCreateDate.toLocaleString());

// let myCreateDate =  new Date("03-14-2025");
// console.log(myCreateDate.toLocaleString());

// let myCreateDate =  new Date("03-14-2025");
// let myTimeStamp = Date.now();

// console.log(myTimeStamp); //1742145381411 in millisecond
// console.log(myCreateDate.getTime()); //1741910400000 in millisecond

// console.log(Math.floor(Date.now()/1000)); // 1742145502 in seconds

let newDate = new Date();
console.log(newDate); // 2025-03-16T17:29:14.264Z
console.log(newDate.getMonth()); // 2 - march because index start from 0 
console.log(newDate.getMonth() + 1); // 3 
console.log(newDate.getDay()); // 0 - sunday

newDate.toLocaleString('default', {
    weekday: "long"
}) // actually day print 

