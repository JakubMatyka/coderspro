// Zadanie 1

function keys(obj) {
  var arrKeys = []
  var key;
  for(key in obj) {
    if(obj.hasOwnProperty(key)) {
      arrKeys.push(key)
    }
  }
  return arrKeys;
}

var obj = {
  red: 'dasdasd',
  green: 'sdfsdf',
  blue: 'asdfsdf'
};

console.log(keys(obj)); // ['red', 'green', 'blue']