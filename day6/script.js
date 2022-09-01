//1.Iterate 0 to 10 using for loop, do the same using while and do while loop

//for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
//while loop
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
//do while loop
let a = 0;
do {
  console.log(a);
  a++;
} while (a <= 10);

//2.Iterate 10 to 0 using for loop, do the same using while and do while loop

//for loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

//while loop
let i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

//do while loop
let b = 10;
do {
  console.log(b);
  b--;
} while (b >= 0);

//3.Iterate 0 to n using for loop

//for loop
let n = 10;
for (let i = 0; i <= n; i++) {
  console.log(i);
}
//4. Write a loop that makes the following pattern using console.log():
//5. Use loop to print the following pattern:
//6. Using loop print the following pattern

//7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++)
  if (i % 2 == 0) {
    console.log(i);
  }
//8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++)
  if (i % 2 == 1) {
    console.log(i);
  }
//9. Use for loop to iterate from 0 to 100 and print only prime numbers

//10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
}
console.log(`sum of all the numbers from 0 to 100 is ${sum}`);

//11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    evenSum = evenSum + i;
  } else {
    oddSum = oddSum + i;
  }
}
console.log(evenSum);
console.log(oddSum);
console.log(
  `the sum of all the even numbers from 0 to 100 is ${evenSum} and the sum of all the odd numbers from 0 to 100 is ${oddSum} `
);
//12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let even = 0;
let odd = 0;
let total = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    even = even + i;
  } else {
    odd = odd + i;
  }
}
total.push(even, odd);
console.log(total);

//13.Develop a small script which generate array of 5 random numbers
var arr = [];
for (var d = 0; d < 5; d++) {
  arr.push(Math.floor(Math.random() * 6) + 1);
}
console.log(arr);

//14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
const newArr = [];
while (newArr.length < 5) {
  const r = Math.floor(Math.random() * 10) + 1;
  if (newArr.indexOf(r) === -1) newArr.push(r);
}
console.log(newArr);
//15. Develop a small script which generate a six characters random id:
let char = "abcdefghijklmnopqrstuvwxyz1234567890";

// let id = "";
// for (let i = 0; i < 6; i++) {
//   const randNum = Math.floor(Math.random() * char.length);
//   id = id + char.charAt(randNum);
// }
// console.log(id);

//Exercise level 2

//1.Develop a small script which generate any number of characters random id:
let id = "";
let idLen = 8;
for (let i = 0; i < idLen; i++) {
  const randNum = Math.floor(Math.random() * char.length);
  id = id + char.charAt(randNum);
}
console.log(id);

//2.Write a script which generates a random hexadecimal number.

//3.Write a script which generates a random rgb color number.

const rand = Math.floor(Math.random() * 256);
console.log(`rgb(${rand}, ${rand}, ${rand})`);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
//4. Using the above countries array, create the following new array.
[
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];
const newArray = [];
for (const c of countries) {
  newArray.push(c.toUpperCase());
}
console.log(newArray);

//5. Using the above countries array, create an array for countries length'.

for (const c of countries);
{
  newArray.push(c.length());
}
console.log(newArray);
