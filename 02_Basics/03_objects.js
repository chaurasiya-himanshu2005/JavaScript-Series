// singleton 
// object.create

const { jsx } = require("react/jsx-runtime");

// onject literals
const JsUser = {
    name: "Hitesh",
    fullname: "Hitesh Choudary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLOggedIN: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullname"]);
console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeeze(JsUser);
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTw0 = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting()); // function (anonymous)
console.log(JsUser.greetingTw0());