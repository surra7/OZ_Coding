"use strict";
// 4-4. 유틸리티 타입
const capital = {
    "South Korea": "Seoul",
    "United States": "Washington D.C",
    "Canada": "Ottawa"
};
const countryInfo = {
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
function someFunction(...param) {
    const [id] = param;
}
someFunction(100);
function saveUser(...params) {
    const [name, age] = params;
    console.log([name, age]);
}
saveUser("David", 33);
