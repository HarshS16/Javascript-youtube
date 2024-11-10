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
//  console.log(myArr);
//  console.log(myArr.includes(99));
 // includes used to check if element is present in the array
// console.log(myArr.indexOf(7));
// indexOf used to find the index of the first occurrence of the element
// const newArr= myArr.join();
// console.log(newArr);
// join used to convert array into a string, by default it joins elements with comma
console.log(myArr);
// slice and splice methods
const myn1= myArr.slice(1,3);
console.log(myn1);
// slice used to create a new array from existing array, it doesn't modify original array 
//first element of range is included in the array second element is not included like in above example index 1 is included but 3 is not included
console.log(myArr);

const myn2= myArr.splice(1,3);
console.log(myn2);
console.log(myArr);
// splice also returns a new array with a section of the original array but it also includes the second element(range) 
// splice also changes the main array and deletes the spliced elements from the main array , slide doesn't do so 
