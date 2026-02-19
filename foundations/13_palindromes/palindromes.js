const palindromes = function (word) {
    let fromEnd = word.length - 1
    let fromStart = 0;

    while (fromEnd > fromStart) {
        let startCharacter = word.charAt(fromStart);
        let endCharacter = word.charAt(fromEnd);
        while ((word.charAt(fromEnd) === " " || !word.charAt(fromEnd).toLowerCase().match(/[a-zA-Z0-9]/i)) && fromEnd >= 0) {
            console.log("from end, char is: " + word.charAt(fromEnd));
            fromEnd--;
        }
        while ((word.charAt(fromStart) === " " || !word.charAt(fromStart).toLowerCase().match(/[a-zA-Z0-9]/i)) && fromEnd <= word.length - 1) {
            console.log("from start, char is: " + word.charAt(fromStart));
            fromStart++;
        }
        if (fromEnd >= 0 && fromStart <= word.length - 1) {
            if (word.charAt(fromStart).toLowerCase() !== word.charAt(fromEnd).toLowerCase()) {
                console.log("start: " + word.charAt(fromStart) + ", end: " + word.charAt(fromEnd));
                return false;
            }
        }   
        fromEnd--;
        fromStart++;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
