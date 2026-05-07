const accountId = 14455
let accountEmail = "himanshu@gmail.com"
var accountPass = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2    // not allowed

// prefer not to be var because of the 
// issues of block scope and functional scope

accountEmail = "hc@hc.gmail.com";
accountPass = "1122344";
accountCity = "Benguluru"

console.log(accountId);
console.table([accountId , accountEmail, accountPass, accountCity, accountState]);
