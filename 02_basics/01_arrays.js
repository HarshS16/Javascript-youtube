//arrays
//arrays in js are resizable and can contain a mix of datatypes 
// elements can be acessed through indexes and not values
// ways to declare an array-->

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// how to print an element of the array-->
// console.log(myArr[1]);
//prints second element(index1) of the array
// array methods
myArr.push(7);
myArr.push(6);
// push used to add element at the end of the array
// myArr.pop();
//pop used to remove last element
myArr.unshift(99);
//unshift used to add element at the beginning of the array, shifts all elements by one position to the right(not much efficient as increases work for pc)
 console.log(myArr);
 console.log(myArr.includes(99));
 // includes used to check if element is present in the array
console.log(myArr.indexOf(7));
// indexOf used to find the index of the first occurrence of the element
