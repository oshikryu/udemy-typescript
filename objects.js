var profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        long: 11
    },
    setAge: function (age) {
        this.age = age;
    }
};
var age = profile.age;
var _a = profile.coords, lat = _a.lat, long = _a.long;
