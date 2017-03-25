// Atrybuty wspólne

// Object.freeze(); - po wykonanniu nie można dodawać ani usuwać właściwości

(function(){
    "use strict";
    var person = {
      name: 'Kondrad'
    };

    console.log(Object.isExtensible(person)); // true
    console.log(Object.isFrozen(person)); // false

    Object.freeze(person);
    console.log(Object.isFrozen(person)); // true

    person.sayGoodbye = function () {
        console.log('Say godbye ', this.name)
    };

    console.log('sayGoodbye' in person); // false

    person.name = 'Piotr';
    console.log(person.name); // 'Konrad'

    delete person.name;
    console.log('name' in person); // true
})();