// function without parameter
function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;

  console.log(sum);
}

addTwoNumbers();

//Function with a parameter
// ex1
function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}

console.log(areaOfCircle(10));
//ex2
function angleOfRectangle(a) {
  let angle = a * a;
  return angle;
}
console.log(angleOfRectangle(9));

//Function returning value
//ex3
function printFullNames() {
  let firstName = "Asabeneh";
  let lastName = "Yetayeh";
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}
console.log(printFullNames());

//ex4
function printTotal() {
  let firstNum = 30;
  let lastNum = 40;
  let total = firstNum + lastNum;
  return total;
}
console.log(printTotal());

//Function with two parameters
//ex5
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(printFullName("Asabeneh", "Yetayeh"));

//ex6
function printTotalNumber(firstN, lastN) {
  let mul = firstN * lastN;
  return mul;
}
console.log(printTotalNumber(10, 20));

const areaOfCirc = (radius) => {
  let area = Math.PI * radius * radius;
  return area;
};
console.log(areaOfCircle(10));
