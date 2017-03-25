// Definiowaniem właściwości

var person  = {
  name: 'Kuba'
};

person.age = 12;

// [[Put]] wewnętrzna metoda JS do tworzenia nowych właściwośći

// [[Set]]
person.name = 'Bartek';
console.log(person.name); // 'Bartek'