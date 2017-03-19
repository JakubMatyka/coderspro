// Modyfikacja this bind()

function logNameAll(arg) {
  console.log(arg + ": " + this.name);
}

var person1 = {
  name: 'Piter'
};

var person2 = {
  name: 'Michael'
};

var name = 'Michelle';

// tworzę funkcję powiązaną z obiektem person1
var logNameAll1 = logNameAll.bind(person1);
console.log(logNameAll1('person1'));

var logNameAll2 = logNameAll.bind(person2, 'person2');
console.log(logNameAll2());

person2.logName = logNameAll1;
console.log(person2.logName('person2'));
