// 5-2. 비동기 

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

interface MyDataType{
    id: number;
    name: string;
}

type Config = Record<string, string>;

async function loadConfig(): Promise<Config> {
    const response = await fetch("/api/config");
    const configData: Config = await response.json();

    return configData;
}

async function fetchData2<T>(url: string): Promise<T>{
    const response = await fetch(url);
    const data = await response.json();

    return data as Promise<T>;
}

const fetchData = () : Promise<MyDataType> => {
//function fetchData () {
    return new Promise((resolve, reject) => {
        // 로직 수행 (비동기)
        const success = true;
        if (success) {
            const data = {
                id: 1,
                name: 'test',
            }
            resolve(data);
        } else {
            reject("something went wrong...");
        }
    });
};

fetchData().then((data) => console.log(data)).catch((error) => console.error(error));

async function doFetch() {
    // 비동기 로직
    try {
        const data = await fetchData(); // 해당 Promise의 결과가 반환될 때 까지 이 함수의 실행을 멈춤
        console.log(data);
    } catch (error){
        console.error(error);
    }
}
// async await를 사용하면 나중에 비동기 처리 로직을 동기 로직으로 바꾸는 등 
// 유지 관리가 더 쉽기 때문에 그냥 Promise 체인 보다 async await를 더 많이 사용한다

doFetch();

