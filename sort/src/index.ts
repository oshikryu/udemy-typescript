import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

//const unsorted = new NumbersCollection([10, 3, -5, 0]);
//const sorter = new Sorter(unsorted);
//sorter.sort();
//console.log(sorter.collection);


//console.log('character sort');
//const charactersCollection = new CharactersCollection('Xaaybdw');
//const charSorter = new Sorter(charactersCollection);
//charSorter.sort();
//console.log(charSorter.collection);


//const linkedList = new LinkedList();
//linkedList.add(500);
//linkedList.add(-10);
//linkedList.add(-3);
//linkedList.add(4);

//const sorter = new Sorter(linkedList);
//sorter.sort();
//linkedList.print();



// updated sorter with abstract class
// sorted array of numbers
const unsorted = new NumbersCollection([10, 3, -5, 0]);
unsorted.sort()
console.log(unsorted.data);


console.log('character sort');
const charactersCollection = new CharactersCollection('Xaaybdw');
charactersCollection.sort();
console.log(charactersCollection.data);


const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();

