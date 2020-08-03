// type annotations
let apples: number = 2;

// invalid
//apples = 'asa';

let speed: string = 'supah fast';
let hasName: boolean = true;

// WHAAAAAT
let nothing: null = undefined;
let undef: undefined = null;

let now: Date =  new Date();

// Array of strings
let colors: string[] = ['red', 'green'];
let nums: number[] = [1,3];
let truuu: boolean[] = [true, false];

// classes
class Car {
  wheels: {}
};

let car: Car = new Car();

class Point {
  x: number;
  y: number;
};

// object literal
let point: Point = {
  x: 10,
  y: 20,
};

let coords: { x: number; y: number } = {
  x: 1,
  y: 2,
};

// function
// void returns nothing
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};


// type annotations aren't really required due to type inference
//
// when to use annotations?
// 1) function that returns `any` type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // x: 10, y: 20

// 2) declare on one line and initialize it later
let words = ['red', 'blue', 'green'];
let foundWord: boolean;
// inferred from usage - annotation or initialize on the same line
words.forEach((word) => {
  if (word === 'green') {
    foundWord = true;
  }
});

// 3 type cannnot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // using an or statement
// true/false depending on value > 0

// BAD
//numbers.forEach((num) => {
  //numberAboveZero = num;
//});

numbers.forEach((num) => {
  numberAboveZero = num;
});

