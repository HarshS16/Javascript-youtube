const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); Should not be used, old way of concatenation, not used now

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//above method is a better method, it is called string interpolation, here we used placeholders represented by ${} used to store the string which is to be inserted into the other string
const gameName = new String('hitesh-hc-com')
//this is the best way of declaring a string, through this the string is stored as object in a sequential array like manenr wherein all the characters have some index, through this method , we can apply a large number of operations on the string

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length); used to check length
// console.log(gameName.toUpperCase()); convert string to uppercase
//console.log(gameName.charAt(2)); used to check which character is present at index=2
console.log(gameName.indexOf('t'));
//used to check t is present at which index

const newString = gameName.substring(0, 4)
console.log(newString);
//used to create a substring from index 0 to 4 of the main string, it only takes elements of index 0,1,2,3 and ignores 4

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
//also used to create a substring but we can also create in reverse order in slice, not in substring method

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());
//trim method is used to delete empty spaces from the string we can also use trimend , trimleft,trimright

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
//used to replace the character %20 by - 

console.log(url.includes('sundar'))
//used to check if string url has the string sundar in it

console.log(gameName.split('-'));
//used to split the string at the places where it encounters "-"