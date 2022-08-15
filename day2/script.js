//LEVEL 1

//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript";
//2. Print the string on the browser console using console.log()
console.log(challenge);
//3.Print the length of the string on the browser console using console.log()
console.log(challenge.length);
//4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());
//5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

//6. Cut (slice) out the first word of the string using substr() or substring() method
//substr(startIndex, length)
console.log(challenge.substr(0, 2));

//substring(startIndex, lastIndex)
console.log(challenge.substring(0, 2));

//7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
//substr(startIndex)
console.log(challenge.substr(3));
//substring(startIndex)
console.log(challenge.substring(3));

//8. Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"));

//9. Split the string into an array using split() method
console.log(challenge.split(""));

//10. Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "));
//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(","));

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript", "Python"));

//13 What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

//14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11));

//15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));
//16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"));
//17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let becauseSentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(becauseSentence.indexOf("because"));
//18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(becauseSentence.lastIndexOf("because"));
// 19 Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(becauseSentence.search("because"));
//20.Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(" 30 Days Of JavaScript ".trim());
//21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("3"));
//22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("pt"));
//23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match("a"));
//24.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

console.log("30 days of".concat(" JavaScript"));

//25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

//LEVEL 2

// 1.
let statement =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(statement);
// 2.
let quote =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(quote);
// 3.
let string = "10";
let num = 10;
console.log(parseInt(string) === num);
// 4.
let number = parseFloat(9.8);
console.log(Math.round(number));
// 5.
let sentence = "python and jargon";
console.log(sentence.includes("on"));
// 6.
let course = "i hope this course is not full of jargon";
console.log(course.includes("jargon"));

// 7.
let numb = Math.floor(Math.random() * 101);
console.log(numb);
// 8.
numb = Math.floor(Math.random() * 51) + 50;
console.log(numb);
// 9.
numb = Math.floor(Math.random() * 256);
console.log(numb);
// 10.
let m = Math.floor(Math.random() * 10);
console.log("javascript".charAt(m));
// 11.
let numbers = "1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125";
console.log(numbers);

// 12.
let because =
  "You cannot end a sentence with because because because is a conjunction";
console.log(because.substr(31, 23));
