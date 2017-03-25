// accumulator function

function accumulator(str) {
    var response = [];
    for(var i = 0; i < str.length; i++) {
        var wordish = '';
        for(var j = 0; j < i + 1; j++) {
            wordish += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();
        }
        response.push(wordish);
    }
    return response.join('-');
}

accumulator("abcd");    // "A-Bb-Ccc-Dddd"