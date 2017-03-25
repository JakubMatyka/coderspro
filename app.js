// Wyliczeniach

var obj = {
  string: 'abc'
};

for(var property in obj) {
  console.log(property); // nazwa właściwości
  console.log(obj[property]); // wartość właściwości
}

// _proto_ nie będzie wylistowane ponieważ [[Enumerable]] jest ustawione na false
console.log(Object.keys(obj));
console.log(property.propertyIsEnumerable('__proto__'));

