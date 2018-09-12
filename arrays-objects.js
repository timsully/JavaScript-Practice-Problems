// Created a variable called studentInfo and assigned it
// equal to and object with five key pair values
const studentInfo = {
    name: 'Simon Ableton',
    currentLocation: 'TuckLuck',
    hometown: 'Anchorage',
    age: 29,
    knownsJS: false,
    sayHi: function() {
        console.log('Hello! I am ' + this.name);
    }
};

// calling the function which will output the code
// within the code block which is a console.log, sweg.
studentInfo.sayHi();

const numbers = [3, -2, 33, -10];

for (let key in studentInfo) {
    console.log('key: ', key);
    console.log('value: ', studentInfo[key]);
};

function testFn() {
    console.log(arguments);
}

testFn(true, 'Shovel', 17);