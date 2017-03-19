// Objekty - wykrywanie właściwości

// NIEEEEEEEEEEEEE!!!!!!!!!!
/*var person = {
  number: 0
};

if (person.number) {
  console.log('true');
} else {
  console.log('false');
}*/

// OK
/*var person1 = {
  name: 'asdasd',
  age: 34
};

var person2 = {
  name: 'Jduasdas',
  age: 654
};

console.log('name' in person1); // true
console.log('age' in person2); // true
console.log('height' in person2); // false*/

var person1 = {
  name: 'asdasd',
  logName: function () {
    console.log(this.name);
  }
};

console.log('name' in person1); // true
console.log(person1.hasOwnProperty('name')); // true
console.log('toString' in person1); // true
console.log(person1.hasOwnProperty('toString')); // false