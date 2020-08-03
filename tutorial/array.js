// typed arrays must be the same type or add special type annotations for mixed types
var carMakers = ['ford', 'toyota'];
var dates = [new Date(), new Date()];
var carsByMake = [
    ['f150'],
    ['corrola'],
    ['camaro']
];
carMakers.map(function (car) {
    return car.toUpperCase();
});
// flexible types
// two different types in this array
var importantDates = [new Date(), '2030-10-10'];
importantDates.push('2030-11-11');
importantDates.push(new Date());
//importantDates.push(1);
