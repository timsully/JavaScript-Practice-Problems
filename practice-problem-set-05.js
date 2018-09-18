// Creating a function called logNegative that takes in
// one argument in its parameters, parameter allowing you 
// to pass a value into 'x' and in the code block we log 
// the negative integer value of each element being iterated
// and then log these values as negative values to the console

function logNegative(x) {
    console.log(-x);
};

const numbers = [1, 5, 3, 0, -2];

// Calling the forEach method on the numbers variable which
// has an array assigned to it and we pass in the logNegative
// function as its argument to log the values being iterated 
// through in the numbers array as negative values
numbers.forEach(logNegative);


let swegArray = [5, 10, 15, 20];

const mapSwegBreh = swegArray.map(x => x * 2);

console.log(mapSwegBreh);