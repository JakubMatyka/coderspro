// Obiekty - usuwanie wartości

var person = {
  name: 'asdas'
};

console.log(person.name); // asdas

delete person.name;

console.log('name' in person); // false
console.log(person.name); // undefined