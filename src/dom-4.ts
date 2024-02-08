// 4-4. 유틸리티 타입

// Partial<T>
// 타입 T의 모든 속성을 선택적으로 만듦

// type User = {
//     id: number;
//     name: string;
//     email: string;
// }

// type PartialUser = Partial<User>;


// type Product = {
//     id: number;
//     price: number;
// }

// type PartialProduct = Partial<Product>;


// Readonly<T>

// type User = {
//     id: number;
//     name: string;
// }

// const user: Readonly<User> = {
//     id: 1,
//     name: "John"
// }

// user.id = 10; // 오류발생


// Pick<T, K>
// 전달한 T라는 객체에서 K라는 속성을 추출

// type User = {
//     id: number;
//     name: string;
//     email: string;
// }

// type UserWithNameOnly = Pick<User, "name">; // name 속성만 가진 객체 생성

// const user: UserWithNameOnly = {
//     name: "Lee"
// }


// Omit<T, K>
// 전달한 T라는 객체에서 K라는 속성만 제외하고 나머지 타입만 가진 객체 반환

// type Product = {
//     id: number;
//     name: string;
//     price: number;
//     uniqueCode: number;
// }

// type ProductWithOmit = Omit<Product, "uniqueCode" | "price">; // id, name만 가진 객체


// Record<K, T>
// K 타입의 키와 T 타입의 값으로 구성된 객체 타입 생성
// 모든 키가 같은 타입의 값을 가지도록 함

type Country = "South Korea" | "United States" | "Canada";
type Capital = string;

type CountryCapitals = Record<Country, Capital>;

const capital: CountryCapitals = {
    "South Korea": "Seoul",
    "United States": "Washington D.C",
    "Canada": "Ottawa"
}

type CountryInfo = {
    capital: string;
    population: number;
    continent: string;
}

type CountryInfoMap = Record<Country, CountryInfo>;

const countryInfo: CountryInfoMap = {
    'South Korea': {
        capital: 'Seoul',
        population: 51_000_000,
        continent: 'Asia'
    },
    'United States': {
        capital: 'Washington D.C',
        population: 331_000_000,
        continent: 'North America'
    },
    'Canada': {
        capital: 'Ottawa',
        population: 83_000_000,
        continent: 'North America'
    }
}


// Parameters<T>
// 함수의 매개변수 타입을 튜플로 추출

type SomeFunction = (id: number) => void;
type Param = Parameters<SomeFunction>;

function someFunction(...param: Param) {
    const [id] = param;
}

someFunction(100);


type SaveUser = (name: string, age: number) => void;
type Params = Parameters<SaveUser>;

function saveUser(...params: Params) {
    const [name, age] = params;
    console.log([name, age])
}

saveUser("David", 33);


export { };