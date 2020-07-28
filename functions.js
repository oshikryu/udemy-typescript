var add = function (a, b) {
    return +a + +b;
};
var multiply = function (a, b) {
    return a * b;
};
var logger = function (message) {
    console.log(message);
    // return null;
    // return undefined;
};
// really truly expect to return nothing
var throwError = function (message) {
    throw new Error(message);
    // never reaches the end
};
var throwErrorString = function (message) {
    if (!message) {
        throw new Error(message);
    }
    // never reaches the end
    return message;
};
var forecast = {
    date: new Date(),
    weather: 'sunny'
};
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    return weather;
};
var logWeather2 = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
