// alert('Hello World');
// console.log('Hello World');
// console.log(3 + 8);


// ===== DAY 1  =====
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
console.log(`${surname} ${firstname} also known as ${nickname} is ${age} years old and he is ${status}`);


// === DAY 2 ===


//Conditional Statements 

// IF STATEMENT
if(2 + 2 === 5){
    alert("Correct");
}

//IF ELSE STATEMENT
if(3 * 4 === 90){
    console.log("Correct");
}else{
   console.log("Wrong");
}


console.log("== if else if statement ===");

if(2 + 3 === 45){
    console.log("1st is correct");
}else if(10 - 13 === 7){
     console.log("2nd is correct");
}else if(3 * 45 === 15){
     console.log("3rd is correct");
}else if(12 / 54 === 3){
     console.log("4th is correct");
}else{
     console.log("None is correct");
}