/*Declare an empty array;
Declare an array with more than 5 number of elements
Find the length of your array
Get the first item, the middle item and the last item of the array
Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
Print the array using console.log()
Print the number of companies in the array
Print the first company, middle and last company
Print out each company
Change each company name to uppercase one by one and print them out
Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
Filter out companies which have more than one 'o' without the filter method
Sort the array using sort() method
Reverse the array using reverse() method
Slice out the first 3 companies from the array
Slice out the last 3 companies from the array
Slice out the middle IT company or companies from the array
Remove the first IT company from the array
Remove the middle IT company or companies from the array
Remove the last IT company from the array
Remove all IT companies*/

//1.
//const arr = Array();
//console.log(arr); // []

//2.
const fruits = ["banana", "orange", "mango", "lemon", "apple"];
console.log(fruits); // (5) ['banana', 'orange', 'mango', 'lemon', 'apple']
//3.
console.log(fruits.length); // 5
//4.
let fisrtItem = fruits[0];
console.log(fisrtItem); //banana

let middleItem = fruits[2];
console.log(middleItem); //mango

let lastItem = fruits[4];
console.log(lastItem); //apple
//5.
const arr = [
  "Adebayo",
  "lukman",
  360,
  false,
  { day: "sunday", month: "july" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
];
console.log(arr);
//6.
console.log(arr.length); //6
//7.
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
//8.
console.log(itCompanies.length);
//9.
let fisrtCompany = itCompanies[0];
console.log(fisrtCompany); //Facebook

let middleCompany = itCompanies[3];
console.log(middleCompany); //Apple

let lastCompany = itCompanies[6];
console.log(lastCompany); //Amazon
//10.
let a = itCompanies[0];
console.log(a);
let b = itCompanies[1];
console.log(b);
let c = itCompanies[2];
console.log(c);
let d = itCompanies[3];
console.log(d);
let e = itCompanies[4];
console.log(e);
let f = itCompanies[5];
console.log(f);
let g = itCompanies[6];
console.log(g);
let h = itCompanies[7];
console.log(h);

//11.
let i = itCompanies[0].toUpperCase();
console.log(i); //FACEBOOK

let j = itCompanies[1].toUpperCase();
console.log(j); //GOOGLE

let k = itCompanies[2].toUpperCase();
console.log(k); //MICROSOFT

let l = itCompanies[3].toUpperCase();
console.log(l); //APPLE

let m = itCompanies[4].toUpperCase();
console.log(m); //IBM

let n = itCompanies[5].toUpperCase();
console.log(n); //ORACLE

let o = itCompanies[6].toUpperCase();
console.log(o); //AMAZON

//15.
itCompanies.sort();
console.log(itCompanies);
//16.
itCompanies.reverse();
console.log(itCompanies);
//17.
console.log(itCompanies.slice(0, 3));
//18.
console.log(itCompanies.slice(4, itCompanies.length));
//19.
console.log(itCompanies.slice(3, 4));
//20
console.log(itCompanies.shift());
//21.

//22.
console.log(itCompanies.pop());
