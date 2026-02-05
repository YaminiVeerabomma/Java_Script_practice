function sayHi() {
  console.log("Hi Javascript");
}
sayHi();
//function with parameters
function Muiltiply(num1, num2) {
  let result = num1 * num2;
}

let mul = Muiltiply(5, 10);
console.log("Multiplication:", mul); //undefined

//function with return  type
function MultiplyWithReturn(num1, num2) {
  let result = num1 * num2;
  return result;
}

let mulWithReturn = MultiplyWithReturn(5, 10);
console.log("Multiplication with return:", mulWithReturn); //50
function printName(name) {
  console.log("My name is " + name);
}

printName("Yamini");
printName("Ramu");
