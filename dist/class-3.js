"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Country_name;
// interface를 클래스에 적용시킬때는 implements 사용
class Continent {
    constructor(name) {
        this.continentName = name;
    }
    getContinentName() {
        return this.continentName;
    }
}
class Country extends Continent {
    constructor(continentName, name, capital) {
        super(continentName); // 부모 클래스의 constructor를 호출해줌
        _Country_name.set(this, void 0);
        __classPrivateFieldSet(this, _Country_name, name, "f");
        this.capital = capital;
    }
    getInfo() {
        return `${__classPrivateFieldGet(this, _Country_name, "f")}, ${this.capital}, ${this.getContinentName()}`;
        // 그냥 this.continentName 해도 됨 -> public 일때 만!
    }
}
_Country_name = new WeakMap();
let country = new Country("Asia", "South Korea", "Seoul");
console.log(country.getInfo());
// 접근 제어자
// public: 외부에서도 접근 가능, private: 해당 클래스 내부에서만 접근 가능, protected: 해당 클래스와 상속받는 하위 클래스까지 접근 가능
// es6부터는 private 대신 #를 쓸 수 있음
// 추상 클래스
class AbstractCountry {
    constructor(name, capital) {
        this.name = name;
        this.capital = capital;
    }
}
// 보통 클래스는 new 키워드를 이용해 인스턴스 생성, 하지만 추상 클래스는 불가능, 상속을 받아서 사용해야함
// 추상 키워드가 사용된 멤버는 상속받아온 클래스 내부에서 구현을 해줘야함
class MyCountry extends AbstractCountry {
    displayInfo() {
        console.log("display info called");
    }
}
const myCountry = new MyCountry("Germany", "Berlin");
myCountry.displayInfo();
