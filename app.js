// Modyfikacja this call()

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

logNameAll.call(this, 'global'); // global: Miechelle
logNameAll.call(person1, 'person1'); // person1: Piter
logNameAll.call(person2, 'person2'); // person2: Michael