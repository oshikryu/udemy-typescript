import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';

const unsorted = new NumbersCollection([10, 3, -5, 0]);
console.log(`unsorted = ${unsorted}`);
const sorter = new Sorter(unsorted);
sorter.sort();
// sorted array of numbers
console.log(sorter.collection);
