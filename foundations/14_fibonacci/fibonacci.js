const fibonacci = function(num) {
    let number = Number(num);
    let arr = [1, 1];

    if (number < 0) {
        return "OOPS";
    }

    if (number === 0) {
        return 0;
    }
    if (number === 1 || number === 2) {
        return arr[number - 1];
    }
    else {
        while (number > 2) {
            let temp = arr[1];
            arr[1] = arr[0] + arr[1];
            arr[0] = temp;
            number--;
        }
    }
    return arr[1];
};
    

// Do not edit below this line
module.exports = fibonacci;
