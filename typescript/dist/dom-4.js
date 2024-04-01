// 4-4. 유틸리티 타입
var capital = {
    "South Korea": "Seoul",
    "United States": "Washington D.C",
    "Canada": "Ottawa"
};
var countryInfo = {
    'South Korea': {
        capital: 'Seoul',
        population: 51000000,
        continent: 'Asia'
    },
    'United States': {
        capital: 'Washington D.C',
        population: 331000000,
        continent: 'North America'
    },
    'Canada': {
        capital: 'Ottawa',
        population: 83000000,
        continent: 'North America'
    }
};
function someFunction() {
    var param = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param[_i] = arguments[_i];
    }
    var id = param[0];
}
someFunction(100);
function saveUser() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var name = params[0], age = params[1];
    console.log([name, age]);
}
saveUser("David", 33);
