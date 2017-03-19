// Modyfikacja this apply()

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

logNameAll.apply(this, ['global']); // global: Miechelle
logNameAll.apply(person1, ['person1']); // person1: Piter
logNameAll.apply(person2, ['person2']); // person2: Michael