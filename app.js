// Funkcja jako wartość

function sayHello() {
  console.log('Hi');
}

sayHello();
var sayHello2 = sayHello;

//
var numbers = [1, 45, 2, 4, 6, 78, 11]; // []
console.log(numbers.sort());

var foo = numbers.sort(function (a, b) {
  return a - b;
});
console.log(foo);
