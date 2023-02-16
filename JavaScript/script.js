// alert('Hello World');
// console.log('Hello World');
// console.log(3 + 8);

//Data Types => strings, numbers, booleans

const nickname = "chidestech";  //constants
const surname = "Okoro";
const firstname = "Ignatius";
let age = 16;  //variables
let status = "single";
let isTeacher = true;
let height = "1.8m";



console.log(firstname);
console.log("firstname");
console.log("lastname");
// strings = always within quotation marks (either single or double quotes) i.e ('' or "")
// numbers
//booleans = true or false

console.log(age + 8);
console.log(surname + firstname);
console.log(surname + " " + firstname);

age = 19;
// surname = "Nwafor"; //Not Allowed
console.log(age);

console.log(surname);

//Concatenation
console.log(surname +  " "  + firstname + " also known as " + nickname + " is " + age + " years old and he is " + status);

//Template Strings
console.log(`${surname} ${firstname} also known as ${nickname} is ${age} years old and he is ${single}`);
