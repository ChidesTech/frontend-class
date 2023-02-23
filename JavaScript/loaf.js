// L - Loops
// O - Objects
// A - Arrays
// F - Functions


// Loops 
// for loop
console.log("loops");
for(i = 0; i<=100; i++){
    console.log(i)
};

//Write a loop that returns all numbers between 3 and 78 in descending order
for(i = 78; i>=3; i--){
    console.log(i);
};


//Objects
const manu = {gk : "De gea", cb : "Martinez", dm : "Casemiro", cf : "Rashford"};

const psg = {gk : "Donnarumma", cb : "Ramos", dm : "Veratti", cf : "Mbappe"};

const barca = {gk : "Stergen", cb : "Araujo", dm : "De Jong", cf : "Lewandowski"};


//Dot Notation for objects
console.log(manu.cb);
console.log(barca.cf + ` is the center forward in barcelona`);
console.log(`${barca.cf} is the center forward in barcelona`);

//Arrays : The collection of different items of any data type.
const numberArrays = [2, 5, 7, 12, -9, 10];
const schoolsArray = ["Unizik", "Uniport", "Futo", "Lasu", "Funaab", "Unilag", "Futminna"];
const productsArray = [
    {id : 1 , name : "Laptop", price : 4000 },
    {id : 2 , name : "Car", price : 24000 },
    {id : 3 , name : "House", price : 100000},
];

const mixedArray = [3, "Book", false, true, { cm : "Debruyne", cf : "Haaland",cb : "Akanji"}, [3 , 10]]

// Array Indexing : Array index starts from 0;
//Bracket notation for arrays
console.log(schoolsArray[3]);
console.log(productsArray[2].name);
console.log(mixedArray[5][1]);
console.log(mixedArray[4][1]);
console.log(mixedArray[4].cm);

//Length of an array
console.log("=== LENGTH OF AN ARRAY ===")
console.log(numberArrays.length);
console.log(productsArray.length);





//Looping Through Arrays
console.log("=== Looping Through Arrays ===");
for(i = 0 ; i<schoolsArray.length; i++){
    console.log(schoolsArray[i]);
};

console.log("=== Mapping Through Arrays ===");
schoolsArray.map(x => console.log(x));

console.log("=== Mapping Through Arrays ===");
productsArray.map(x => console.log(x));
