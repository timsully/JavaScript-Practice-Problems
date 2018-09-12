// Created a variable called studentInfo and assigned it
// equal to and object with five key pair values
const studentInfo = {
    name: 'Simon Ableton',
    currentLocation: 'TuckLuck',
    hometown: 'Anchorage',
    age: 29,
    knownsJS: false,
}

// calling the studentInfo variable which has an object
// assigned to it, in the line below we are using dot 
// notation to create another key that has a function
studentInfo.sayHi = function() {
    // using console log to concatenate a string with
    // the value from the key name that is from the 
    // object assigned to the studentInfo variable
    console.log('Hello, I am ' + studentInfo.name);
};

// calling the function which will output the code
// within the code block which is a console.log, sweg.
studentInfo.sayHi();