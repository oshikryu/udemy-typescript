"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var unsorted = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
console.log("unsorted = " + unsorted);
var sorter = new sorter_1.Sorter(unsorted);
sorter.sort();
// sorted array of numbers
console.log(sorter.collection);
