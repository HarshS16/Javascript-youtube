//Immediately invoked Function Expressions
// jo function immediately chal jaye vo kehlata hai iife 
// this is used when we dont want the global variable to pollute the functions content
// this function is called on definition of the function

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')