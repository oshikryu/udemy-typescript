// typed arrays must be the same type or add special type annotations for mixed types
const carMakers: string[] = ['ford', 'toyota'];

const dates = [new Date(), new Date()]
const carsByMake: string[][] = [
  ['f150'],
  ['corrola'],
  ['camaro']
]

carMakers.map(
  (car: string): string => {
    return car.toUpperCase();
  }
)

// flexible types
// two different types in this array
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-11-11');
importantDates.push(new Date());
//importantDates.push(1);
