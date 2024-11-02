const score =100
const balance = new Number(100.3455)
console.log(balance);
console.log(balance.toString().length);
//above statement converts the number to a string and prints the length of the string
console.log(balance.toFixed(2));
//above statement rounds off the number to 2 places after decimal
console.log(balance.toPrecision(4));
//above statement rounds off the number to atmost 4 digits(4 most significant digits)

const hundreds= 100000000
console.log(hundreds.toLocaleString('en-IN'));
//above statement adds commas to the large number, if bracket is empty it adds according to us standards
