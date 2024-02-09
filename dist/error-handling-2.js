"use strict";
// 5-2. 비동기 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 타입스크립트에서 async 함수는 Promise를 반환
// await 키워드를 사용하여 비동기 작업의 완료 대기
// async 함수의 반환 타입을 Promise<T>로 지정하여 비동기 작업의 결과 타입을 명확하게 한다
// 비동기 프로그래밍이란?
// 동시에 실행되지 않는 작업들을 더 효율적으로 처리하는 프로그래밍 방식
// 프로그램의 실행 흐름을 방해하지 않고 백그라운드에서 특정 작업을 수행
// Promise -> 비동기 작업을 위한 JS 객체
// 비동기 처리가 성공적으로 완료 -> resolve, 실패 -> reject
// const sync = () => {
//     console.log("동기 작업 완료");
// }
// const asyncFn = () => {
//     return new Promise((resolve) => {
//         resolve("비동기 작업 완료");
//     })
// }
// function main() {
//     sync();
//     asyncFn().then((value) => console.log(value));
//     sync();
//     sync();
// }
// main();
// 동기 작업 완료
// 동기 작업 완료
// 동기 작업 완료
// 비동기 작업 완료 <- 비동기 작업이 마지막
// --> 동기 작업은 callstack에 쌓여서 먼저 처리되고 
// 비동기 작업은 eventstack에 쌓여 나중에 callstack이 비어있으면 처리됨
// 타입스크립트에서는 제네릭 프로미스를 사용
// Promise<T> -> T는 비동기 작업의 연산결과 타입을 나타냄
function fetchData() {
    return new Promise((resolve, reject) => {
        // 로직 수행 (비동기)
        const success = true;
        if (success) {
            resolve("data fetch complete");
        }
        else {
            reject("something went wrong...");
        }
    });
}
;
fetchData().then((data) => console.log(data)).catch((error) => console.error(error));
function doFetch() {
    return __awaiter(this, void 0, void 0, function* () {
        // 비동기 로직
        const data = yield fetchData(); // 해당 Promise의 결과가 반환될 때 까지 이 함수의 실행을 멈춤
        console.log(data);
    });
}
doFetch();
