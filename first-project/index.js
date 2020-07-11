const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};

const getDifference = (firstNumber, secondNumber) => {
    return Math.abs(firstNumber - secondNumber);
};

const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
};

const getQuotient = (firstNumber, secondNumber) => {
    return Math.floor(firstNumber / secondNumber);
};

module.exports = {
    add,
    getDifference,
    multiply,
    getQuotient
};
