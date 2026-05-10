// Dates

let myDate = new Date();
console.log(myDate); // it will give date but can't understandable
console.log(myDate.toString()); // Wed Mar 01 2026 12:03:41 GMT+0000 //  it will understandable
console.log(myDate.toDateString()); // Wed Mar 01 2026 // More understandable
console.log(myDate.toLocaleString()); // 3/1/2026, 12:04:46 PM
console.log(typeof myDate); // Object

let myCreatedDate = new Date(2026, 0, 23);
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2026

let myCreatedDate2 = new Date(2026, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString()); // 1/23/2026 5:03:00 AM

let myCreatedDate3 = new Date("01-14-2026");
console.log(myCreatedDate3.toLocaleString()); // 1/14/2026 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp); // it will be milli second
console.log(myCreatedDate.getDate()) // it will give in milli second
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long", 
    // timeZone: ""
});