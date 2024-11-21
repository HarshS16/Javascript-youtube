// singleton 
// object literals
//object.create()   this is the constructor method
there is another method used for declaring objects in JavaScript 
const JsUser = {
    name: "Harsh",
    college:"JSS",
    age: 20,
    hobbies: ["reading", "coding"],
    email="harshme08@gmail.com",
    isLoggedin="FALSE",
    Lastlogindays=["Monday", "tuesday", "wednesday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





