const marvel_heros=["ironman", "spider man","thor"];
const dc_heros=["batman", "superman", "flash"];

// marvel_heros.push(dc_heros);
// above statement adds the dc heros array into the marvel heros array as an array data type element
const all_heros=marvel_heros.concat(dc_heros)
//takes all element of dc and adds them into marvel as elements of the array





const all_new_heros=[...marvel_heros,...dc_heros]
//using spread operator to combine two arrays into one
// spread operator spreads all the elements of the arrays and merges them , here we can add more arrays also
// console.log(all_new_heros);

const another_array = [1, 2, 3,[4, 5, 6],7,[6,7,[8,9]]];
new_array=another_array.flat(Infinity);
// flat function is used to flatten the nested arrays, it takes all the elements of the sub arrays in the parent array and adds them into an array altogether
// console.log(new_array);


console.log(Array.isArray("Harsh"));
console.log(Array.from("Harsh-Developer"));
// is array checks if the element is an array or not.
// array.from function creates an array from the input data type
let coa=15
let ds=18.5
let python = 18
console.log(Array.of(coa, ds, python));
