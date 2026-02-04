const repeatString = function(str, num) {
    if (num === 0 || str === '') { return ""};
    if (num < 0) {return "ERROR"};
    var returnStr = str
    while (num > 1) {
        returnStr = returnStr + str;
        // console.log(num + ": " + str);
        num--;
    }

    return returnStr;
};

// Do not edit below this line
module.exports = repeatString;
