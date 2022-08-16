// 1.
/*let firstName = "bayo";
console.log(typeof firstName); //string

let lastNmae = "deji";
console.log(typeof lastNmae); //string

let country;
console.log(typeof country); //undefined

let city = null;
console.log(typeof city); //object

let age = 30;
console.log(typeof age); //number

let isMarried = false;
console.log(typeof isMarried); //Boolean

let year;
console.log(typeof year); //undefined

// 2.
let string = "20";
let number = 20;
console.log(parseInt(string) === number); //true

// 3.
let num = parseFloat(9.8);
console.log(Math.round(num)); //10

// 4.
let x = 30;
let y = x;
console.log(y == x); //true

console.log(6 > 2); //true

console.log(2 < 5); //true

let u = 2;
let h = "3";
console.log(parseInt(h) === u); //false

console.log(2 > 4); //false

console.log(2 == 3); //false

/*5.
4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Find the length of python and jargon and make a falsy comparison statement.*/

// 5.
/*let p = 4 > 3;
console.log(p); //true

p = 4 >= 3;
console.log(p); //true

p = 4 < 3;
console.log(p); //false

p = 4 <= 3;
console.log(p); //false

p = 4 == 4;
console.log(p); //true

p = 4 === 4;
console.log(p); //true

p = 4 != 4;
console.log(p); //false

p = 4 !== 4;
console.log(p); //false

p = 4 != "4";
console.log(p); //false

p = 4 == "4";
console.log(p); //true

p = 4 === "4";
console.log(p); //false

let ab = "python";
let bc = "jargon";
console.log(ab.length); //6
console.log(bc.length); //6
console.log("python".length != "jargon".length); //false

//6.

/* 
4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python*/

/*let m = 4 > 3 && 10 < 12;
console.log(m); //true

m = 4 > 3 && 10 > 12;
console.log(m); //false

m = 4 > 3 || 10 < 12;
console.log(m); //true

m = 4 > 3 || 10 > 12;
console.log(m); //true

m = !(4 > 3);
console.log(m); //false

m = !(4 < 3);
console.log(m); //true

m = !false;
console.log(m); //true

m = !(4 > 3 && 10 < 12);
console.log(m); //false

m = !(4 > 3 && 10 > 12);
console.log(m); //true

m = !(4 === "4");
console.log(m); //true

console.log("dragon".includes("on") && !"python".includes("on")); //false

/*
 What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.*/

/*let now = new Date();
console.log(now.getFullYear()); //2022

now = new Date();
console.log(now.getMonth()); //7

now = new Date();
console.log(now.getDay()); //3

now = new Date();
console.log(now.getDay()); //3

now = new Date();
console.log(now.getHours()); //16

now = new Date();
console.log(now.getMinutes()); //37

now = new Date();
console.log(now.getSeconds()); //22

//LEVEL 2
let base = prompt("Enter base");
let height = prompt("Enter height");
let area = 0.5 * base * height;
alert(area);

let a = prompt("Enter side a");
let b = prompt("Enter side b");
let c = prompt("Enter side c");
let perimeter = parseInt(a) + parseInt(b) + parseInt(c);
alert(perimeter);*/

/*let width = prompt("Enter width");
let length = prompt("Enter length");
let pm = 2 * (parseInt(width) + parseInt(length));
let areaOfRectangle = length * width * pm;
console.log(areaOfRectangle);*/

/*let radius = prompt("Enter radius");
let pi = 3.14;
let areaOfCircle = pi * radius * radius;
console.log(areaOfCircle);
let circOfCircle = 2 * pi * radius;
console.log(circOfCircle);*/

/*let hour = prompt("Enter hour");
let rate = prompt("Enter rate ");
alert(`Your daily earning is ${hour * rate}`);

let name = prompt("Enter your name");
if (name > 7) {
  alert("your name is long");
} else {
  alert("your name is short");
}*/

let lastName = prompt("Enter lastName");
let firstName = prompt("Enter firstName");
console.log(
  `Your firstname, ${firstName} is longer than your family name,${lastName}`
);
