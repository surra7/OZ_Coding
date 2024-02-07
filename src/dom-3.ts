// 4-3. 고급 타입
// 고급타입이란 기본 타입을 확장하여 복잡한 타입 관계와 구조를 표현할

// 교차 타입 (intersection type)
// 두 개 이상의 타입을 결합해서 모든 타입의 속성을 갖는 단일 타입을 생성

type A = { name: string };
type B = { age: number };

type Person = A & B;

const person: Person = {
    name: 'John',
    age: 33
}


type UserBase = { id: number };
type WithName = { name: string };
type WithEmail = { email: string };
type WithAge = { age: number };

type GuestUser = UserBase & WithName;
type User = UserBase & WithName & WithEmail & WithAge;

const guest: GuestUser = {
    id: 100,
    name: "Paul"
};

const user: User = {
    id: 123,
    name: "Lee",
    age: 30,
    email: "test@email.com"
};


// 조건부 타입 (conditional type)
// 특정 조건에 따라 하나의 타입 또는 다른 다입으로 정의할 수 있게 해주는 패턴

type IsNumber<T> = T extends number ? "Yes" : "No";

type Result1 = IsNumber<number> // "Yes"
type Result2 = IsNumber<string> // "No"


type JsonOrText<T extends "json" | "text"> = T extends "json" ? object : string;

type JsonResponse = JsonOrText<"json"> // object
type TextResponse = JsonOrText<"text"> // string


// keyof 타입 연산자
// 객체의 모든 키(속성 이름)를 문자 리터럴 또는 숫자 리터럴 타입으로 추출할 때 사용
// 객체 타입의 모든 키를 유니온 타입으로 가져올 수 있음

type MyObject = {
    a: number;
    b: string;
    c: boolean;
}

type Keys = keyof MyObject; // "a" | "b" | "c"

// K가 T의 유효한 키 중 하나임을 보장
// 두번째로 전달된 키 값이 첫번째로 전달된 객체에 존재하는 지를 판단해 줌
function getProp<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const obj = { x: 10, y: 20, z: 15 };
const value = getProp(obj, "y"); // 20 반환


// mapped type (매핑 타입)
// 기존 타입을 새로운 타입으로 변환

type OptionalType<T> = {
    [P in keyof T]?: T[P] // T 타입의 모든 속성들을 optional로 바꿔줌
}

type ReadonlyType<T> = {
    readonly [P in keyof T]: T[P]
}

type UserType = {
    id: number;
    name: string;
    age: number;
    email: string;
}

// UserType의 모든 속성을 선택적으로 변환
type OptionalUserType = OptionalType<UserType>;

// UserType의 모든 속성을 읽기 전용으로 변환
type ReadonlyUserType = ReadonlyType<UserType>;

