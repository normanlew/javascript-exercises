const sumAll = function(a, b) {
    if (typeof(a) != "number" || typeof(b) != "number" || a === NaN || b === NaN || a < 0 || b < 0) return "ERROR";
    return (Math.abs(b - a) + 1) * (b + a) / 2;
};

// Do not edit below this line
module.exports = sumAll;
