// type annotations
var apples = 2;
// invalid
//apples = 'asa';
var speed = 'supah fast';
var hasName = true;
// WHAAAAAT
var nothing = undefined;
var undef = null;
var now = new Date();
// Array of strings
var colors = ['red', 'green'];
var nums = [1, 3];
var truuu = [true, false];
// classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
;
var car = new Car();
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
;
// object literal
var point = {
    x: 10,
    y: 20
};
var coords = {
    x: 1,
    y: 2
};
// function
// void returns nothing
var logNumber = function (i) {
    console.log(i);
};
// type annotations aren't really required due to type inference
//
// when to use annotations?
// 1) function that returns `any` type
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(coordinates); // x: 10, y: 20
// 2) declare on one line and initialize it later
var words = ['red', 'blue', 'green'];
var foundWord;
// inferred from usage - annotation or initialize on the same line
words.forEach(function (word) {
    if (word === 'green') {
        foundWord = true;
    }
});
// 3 type cannnot be inferred correctly
var numbers = [-10, -1, 12];
var numberAboveZero = false; // using an or statement
// true/false depending on value > 0
// BAD
//numbers.forEach((num) => {
//numberAboveZero = num;
//});
numbers.forEach(function (num) {
    numberAboveZero = num;
});
