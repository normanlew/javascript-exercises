const reverseString = function(str) {
    let returnStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        returnStr = returnStr + str.charAt(i);
    }
    return returnStr;
};

// Do not edit below this line
module.exports = reverseString;
