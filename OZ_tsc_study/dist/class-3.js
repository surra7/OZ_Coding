var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// interface를 클래스에 적용시킬때는 implements 사용
var Continent = /** @class */ (function () {
    function Continent(name) {
        this.continentName = name;
    }
    Continent.prototype.getContinentName = function () {
        return this.continentName;
    };
    return Continent;
}());
// ECMAScript 2015 이상 부터는 private 대신 #을 써도 됨. 사용할 때도 앞에 #을 붙여야함.
var Country = /** @class */ (function (_super) {
    __extends(Country, _super);
    function Country(continentName, name, capital) {
        var _this = _super.call(this, continentName) || this; // 부모 클래스의 constructor를 호출해줌
        _this.name = name;
        _this.capital = capital;
        return _this;
    }
    Country.prototype.getInfo = function () {
        return "".concat(this.name, ", ").concat(this.capital, ", ").concat(this.getContinentName());
        // 그냥 this.continentName 해도 됨 -> public 일때 만!
    };
    return Country;
}(Continent));
var country = new Country("Asia", "South Korea", "Seoul");
console.log(country.getInfo());
// 접근 제어자
// public: 외부에서도 접근 가능, private: 해당 클래스 내부에서만 접근 가능, protected: 해당 클래스와 상속받는 하위 클래스까지 접근 가능
// es6부터는 private 대신 #를 쓸 수 있음
// 추상 클래스
var AbstractCountry = /** @class */ (function () {
    function AbstractCountry(name, capital) {
        this.name = name;
        this.capital = capital;
    }
    return AbstractCountry;
}());
// 보통 클래스는 new 키워드를 이용해 인스턴스 생성, 하지만 추상 클래스는 불가능, 상속을 받아서 사용해야함
// 추상 키워드가 사용된 멤버는 상속받아온 클래스 내부에서 구현을 해줘야함
var MyCountry = /** @class */ (function (_super) {
    __extends(MyCountry, _super);
    function MyCountry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyCountry.prototype.displayInfo = function () {
        console.log("display info called");
    };
    return MyCountry;
}(AbstractCountry));
var myCountry = new MyCountry("Germany", "Berlin");
myCountry.displayInfo();
export {};
