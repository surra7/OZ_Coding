// 클래스
//interface는 기본적으로 public, 따라서 Continent에 protected나 private인 요소는 interface에 넣지 않음
interface ContinentInterface{
    getContinentName(): string;
}

// interface를 클래스에 적용시킬때는 implements 사용
class Continent implements ContinentInterface{
    protected continentName: string;

    constructor(name: string) {
        this.continentName = name;
    }

    getContinentName() {
        return this.continentName;
    }
}
class Country extends Continent{
    #name: string;
    capital: string;

    constructor(continentName: string, name: string, capital: string) {
        super(continentName); // 부모 클래스의 constructor를 호출해줌
        this.#name = name;
        this.capital = capital;
    }

    getInfo() {
        return `${this.#name}, ${this.capital}, ${this.getContinentName()}`
        // 그냥 this.continentName 해도 됨 -> public 일때 만!
    }
}

let country = new Country("Asia", "South Korea", "Seoul");
console.log(country.getInfo());

// 접근 제어자
// public: 외부에서도 접근 가능, private: 해당 클래스 내부에서만 접근 가능, protected: 해당 클래스와 상속받는 하위 클래스까지 접근 가능
// es6부터는 private 대신 #를 쓸 수 있음

// 추상 클래스
abstract class AbstractCountry{
    name: string;
    capital: string;

    constructor(name: string, capital: string) {
        this.name = name;
        this.capital = capital;
    }

    abstract displayInfo(): void;
}

// 보통 클래스는 new 키워드를 이용해 인스턴스 생성, 하지만 추상 클래스는 불가능, 상속을 받아서 사용해야함
// 추상 키워드가 사용된 멤버는 상속받아온 클래스 내부에서 구현을 해줘야함
class MyCountry extends AbstractCountry{
    displayInfo() {
        console.log("display info called");
    }
}

const myCountry = new MyCountry("Germany", "Berlin");
myCountry.displayInfo();


export { };