"use strict";
// 4-3. 고급 타입
// 고급타입이란 기본 타입을 확장하여 복잡한 타입 관계와 구조를 표현할
const person = {
    name: 'John',
    age: 33
};
const guest = {
    id: 100,
    name: "Paul"
};
const user = {
    id: 123,
    name: "Lee",
    age: 30,
    email: "test@email.com"
};
// K가 T의 유효한 키 중 하나임을 보장
// 두번째로 전달된 키 값이 첫번째로 전달된 객체에 존재하는 지를 판단해 줌
function getProp(obj, key) {
    return obj[key];
}
const obj = { x: 10, y: 20, z: 15 };
const value = getProp(obj, "y"); // 20 반환
// export { }; // 식별자 중복방지를 위해 모듈화
