const removeFromArray = function(arr, ...other) {
    return arr.filter((item) => !other.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
