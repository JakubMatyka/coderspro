// Przeciążenia (overloading)
// C++
/*void funkcja (int);

void funkcja (int, char);

void funkcja (float, int);*/

/*function message(mes) {
  console.log(mes);
}

function message() {
  console.log('Default')
}

message('Hello');*/

/*var message = new Function('message', 'console.log(message)');
message = new Function('console.log("Default")');
message('Hello');*/

function message(message) {
  if(arguments.length === 0) {
    message = 'Default';
  }
  console.log(message);
}

console.log(message('Hello')); // Hello
console.log(message()); // Default