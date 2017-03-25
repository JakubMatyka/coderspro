// PIN VALIDATION function

function pinValidator(str) {
    return /^\d{4}$/g.test(str);
}

// pinValidator("abcd"); // false
// pinValidator("a123"); // false
// pinValidator("123"); // false
// pinValidator("12345"); // false
// pinValidator("1234"); // true