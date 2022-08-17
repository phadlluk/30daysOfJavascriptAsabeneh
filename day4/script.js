//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let userAge = prompt("Enter your age");
let agediff = 18 - userAge;
if (userAge >= 18) {
  alert("You are old enough to drive");
} else {
  alert(`Wait for ${agediff} years `);
}

//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let yourAge = prompt("Enter your age");
console.log(yourAge);
let myAge = 30;
let ageDiff = yourAge - myAge;
if (myAge > yourAge) {
  console.log("I'm older than you");
} else {
  console.log(` You are ${ageDiff} years older than me `);
}

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// Using if...else
let a = 4;
let b = 3;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

// Using ternary operator
a > b ? console.log("a is greater than b") : console.log("a is lesser than b");

//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let n = prompt("Enter a number");
if (n % 2 == 1) {
  alert(`${n} is odd`);
} else {
  alert(`${n} is even`);
}

// LEVEL 2
/*1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/

let score = prompt("enter your score");
if (score > 79 && score < 101) {
  alert("your grade is A");
} else if (score > 69 && score < 80) {
  alert("your grade is B");
} else if (score > 59 && score < 70) {
  alert("your grade is C");
} else if (score > 49 && score < 60) {
  alert("your grade is D");
} else alert("youe grade is F");

/*2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/

let month = prompt("Enter month: ");

switch (month) {
  case "September":
  case "October":
  case "November":
    alert("the season is Autumn");
    break;

  case "December":
  case "January":
  case "February":
    alert("the season is Winter");
    break;

  case "March":
  case "April":
  case "May":
    alert("the season is Spring");
    break;

  case "June":
  case "July":
  case "August":
    alert("the season is Summer");
    break;
}

//3. Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt("What is the day today?");
if (day == "saturday" || day == "sunday") {
  console.log(`${day} is a weekend`);
} else console.log(`${day} is a working day`);

//4. Write a program which tells the number of days in a month.
let theMonth = prompt("Enter month").toLowerCase();
switch (theMonth) {
  case "september":
  case "april":
  case "june":
  case "november":
    alert(`${theMonth} has 30 days`);
    break;
  case "february":
    alert(`${theMonth} has 28 days`);
    break;
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    alert(`${theMonth} has 31 days`);
}

//5. Write a program which tells the number of days in a month, now consider leap year.
let userMonth = prompt("Enter month").toLowerCase();
switch (theMonth) {
  case "september":
  case "april":
  case "june":
  case "november":
    alert(`${userMonth} has 30 days`);
    break;
  case "february":
    alert(`${theMonth} has 28 days`);
    break;
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    alert(`${userMonth} has 31 days`);
}
