// Typy opakowujące (primitive wrapper types)

// String, Number, Boolean

var name = 'Paweł';
var firstCharacter = name.charAt(0);
console.log(firstCharacter);

// to co się dzieje w tle

var name1 = 'Marcin';
var temporary = new String(name1);
var firstCharacter1 = temporary.charAt(0);
temporary = null;
console.log(firstCharacter1);

//

var name = 'Grzesiek';
name.last = 'Kowalski';
console.log(name.last); // udefined

var name2 = 'Zosia';
var temp = new String(name2);
temp.last = 'Kowalska';
temp = null;
var temp = new String(name2);
console.log(temp.last); // undefined
temp = null;

//

var name3 = 'Genowefa';
var count = 10;
var found = false;

console.log(name3 instanceof String); // false
console.log(count instanceof Number); // false
console.log(found instanceof Boolean); // false

//

var name4 = new String('Genowefa');
var count1 = new Number(10);
var found1 = new Boolean(false);

console.log(typeof name4); //
console.log(typeof count1);
console.log(typeof found1);

//

var founded = new Boolean(false);

if(founded) {
  // to zostanie wyświetlone, bo jest sprawdzane czy obiekt istnieje
  console.log('I found a variable!');
} else {
  console.log("I haven't found a variable!");
}