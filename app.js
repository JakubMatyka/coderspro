// Usuwanie właściwości objektu

var animal = {
  gender: 'female'
};

console.log(animal.gender); // 'female'

// delete

delete animal.gender;
console.log(animal.gender); //

// drugi sposób to przypisanie wartości null
animal.gender = ' female';
console.log(animal.gender); // female
animal.gender = null;

// doesnt work - właściwość ma wartość null i mozna ją wykryć poprzez użycie hasOwnProperty
console.log(animal.gender); //


