// user = {
//     id: "1234",
//     name: "John"
// }
// user.name = "John Smith";
// user.id = "5678"; // 오류발생
// 타입 별칭 (Type Alias)
// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// }
// let user1: UserType = {
//     id: "1",
//     name: "John",
//     age: 20
// }
// let user2: UserType = {
//     id: "2",
//     name: "Sarah",
//     age: 30
// }
// let users: UserType[];
// users.push(user1);
// users.push(user2);
// 여기 왜 오류??
// Nested 객체 (중첩 객체)
// type Payload = {
//     timestamp: number;
//     type: string;
//     user: {
//         readonly id: string;
//         isActive?: boolean;
//     }
// }
// const payload: Payload = {
//     timestamp: 12893718,
//     type: 'event',
//     user: {
//         id: "123",
//         isActive: true
//     }
// }
// Parameter
// function add(x: number, y: number): number {
//     return x + y;
// }
// const result = add(10, 5);
// function addToCart(name: string, price: number, quantity: number) {
//     return `${name}, ${price}, ${quantity}`;
// }
// addToCart("orange", 100, 5);
// Defalut Parameter
// function addToCart(name: string, price: number, quantity: number = 1) {
//     return `${name}, ${price}, ${quantity}`;
// }
// addToCart("orange", 10) // -> "orange, 10, 1" 반환
// addToCart("pineapple", 5, 3) // -> "pineapple, 5, 3" 반환
// optional parameter
// function addToCart(name: string, price: number, quantity?: number) {
//     return `${name}, ${price}, ${quantity || 1}`; // -> quantity값이 있으면 그 값 사용, 없으면 1 사용
// }
//Contextual typing
// const numbers: number[] = [1, 2, 3, 4, 5];
// const letters: string[] = ["a", "b", "c", "d"];
// // -> 콜백 함수에 대한 파라미터에 대한 타입을 배열의 요소 타입을 바탕으로 자동으로 추론함
// numbers.map(element => {
//     element.
// })
// Return type annotation
// 함수의 반환값의 타입을 명시해서 예상치 못한 타입의 값을 반환하는 것을 예방
// void -> 함수의 반환값 없음, never: 반환값이 절대 존재하지 않음
// 리터럴과 유니언 타입
// let id: "1"; // -> id는 무조건 문자열 "1"이여야 함
// id = "2"; // 에러
// const toggle = (option: "on" | "off") => {
//     console.log(option);
// }
// toggle("on");
// interface
// interface User {
//     id: number;
//     name: string;
//     isPremium: boolean;
//     someMethod(): void;
// }
// const userA: User = {
//     id: 10,
//     name: "Bill",
//     isPremium: false,
//     someMethod() {
//         console.log("some method called");
//     },
// }
// type alias vs interface
// -> 두 기능의 목적은 크게 다르지 않음
// 문법의 차이: type User = {}, interface User {} -> =을 쓰느냐 안쓰느냐
// type alias: 객체 포함, 리터럴, 원시값등을 타입으로 가질 수 있음
// interface: 객체 타입으로만 사용해야함
// 확장 문법이 다름
// 튜플이란, 고정된 크기의 배열, 각 요소가 다른 타입을 가질 수 있고, 순서가 중요, 자바스크립트에는 존재하지 않는 타입
// 배열에 사용하는 경우
// type lat = number;
// type lng = number;
// type coord = [lat, lng];
// let coords: coord[] = [];
// coords.push([36, -95]);
// coords.push([38, -76]);
// for (const [lat, lng] of coords) [
//     console.log(lat, lng)
// ]
// Enum -> 여러 상수 값들을 그룹화 하는 것이 목적, 자바스크립트에는 존재하지 않는 개념
// enum 내부에 있는 모든 상수값들을 enum의 멤버라고 하고 각 멤버는 할당값을 갖고 있음
// 첫 번째 멤버 = 0 부터 1씩 증가, 명시적으로 할당 값을 지정하면 그 값 부터 1씩 증가
// 숫자형 Enum
// enum PlayerState{
//     Buffering,
//     Playing,
//     Paused,
//     Seeking,
// }
// let currentState: PlayerState;
// currentState = PlayerState.Buffering;
// currentState = PlayerState.Playing;
// const isPlaying = (state: PlayerState) => {
//     return state === PlayerState.Playing;
// }
// // 플레이어가 재생중인지?
// isPlaying(currentState);
// 문자형 Enum
// enum Direction {
//     Left = "LEFT",
//     Right = "RIGHT",
//     Up = "UP",
//     Down = "DOWN",
// }
