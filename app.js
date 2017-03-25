// Setter getter

var person = {
  _name: 'Marcin',
    // musi zwrócić wartość
    get name() {
    // w stringu można dodać %s i jako kolejny argument zmienną
      console.log(`Hello ${this._name}`);
      return this._name;
    },
    // musi dostać argument
    set name(value) {
      console('Zmiana wartości %s', value);
      this._name = value;
    }
};

console.log(person.name);

person.name = 'Zosia';
console.log(person.name);