// Created a variable called studentInfo and assigned it
// equal to an object with five key pair values
const studentInfo = {
    name: 'Simon Ableton',
    currentLocation: 'TuckLuck',
    hometown: 'Anchorage',
    age: 29,
    knownsJS: false,
    sayHi: function() {
        console.log('Hello! I am ' + this.name);
    },
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


// const ninjaAssassin = {
//     codename: "Hollow Eyes",
//     weapon: "katana",
//     stealthy: true,
//     headCount: 0,
//     kill: function() {
//         this.headCount++;
//     },
// };

// // overwrite the headCount method with int value of 45
// ninjaAssassin.headCount = 45;
// // accessing the kill method in the object ninjaAssassin
// ninjaAssassin.kill();
// // 
// ninjaAssassin.codename.toUpperCase();


// const characterAssassin = {
//     codename: 'The Politican',
//     weapon: 'rhetoric',
//     stealthy: false,
//     headCount: 0,
//     kill: function() {
//         this.headCount++;
//     },
// };


// const ghostAssassin = {
//     codename: 'The Wraith',
//     weapon: 'spirit magic',
//     stealthy: true,
//     headCount: 0,
//     kill: function () {
//         this.headCount++;
//     },
// };


const Assassin = function(codename, weapon, stealthy) {
    this.codename = codename;
    this.weapon = weapon;
    this.stealthy = stealthy;
    this.headCount = 0;
    // What not to do
    // this.kill = function() {
    //     this.headCount++;
    // };
};

Assassin.prototype.kill = function() {
    this.headCount++;
};

// Instances of the Assassin class
const ninjaAssassin = new Assassin('Hollow Eyes', 'katana', true);
const characterAssassin = new Assassin('The Politician','rhetoric', false);
const ghostAssassin = new Assassin('The Wraith', 'spirit magic', true);

console.log(ninjaAssassin);
console.log(characterAssassin);
console.log(ghostAssassin);


const array = [ 2, 6, 3, 4 ];
const chars = [ 'a', 'd', 'j' ];
Array.prototype.returnSecond = function() {
    const secondItem = this[1];
    return secondItem;
};

array.returnSecond();
chars.returnSecond();