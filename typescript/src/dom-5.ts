// 4-5. 상수 단언 (const assertion)
// 컴파일러의 정확한 타입 추론을 도와줌
// 배열 또는 객체를 변경 불가능한 생태로 만들어줌


// 객체
// const book = {
//     title: "TypeScript Guide",
//     author: "coding moon",
// } as const;

// book.title = "another title"; // 오류 발생

// 배열
// const nums = [1, 2, 3, 4, 5] as const;

// nums.push(6); // 오류 발생


const config = {
    server: 'https://api.somedomain.com',
    port: 8080,
    version: 2
} as const;

// config.server = "https://anotherdomain.com"; // 에러 발생

// 다른 모듈에서도 사용가능한 읽기 전용 객체
export const statusCodeMap = {
    101: "ordered",
    102: "pending",
    103: "completed"
} as const;

export type statusCodeKeys = keyof typeof statusCodeMap;

function handleStatus(statusCode: statusCodeKeys) {
    const message = statusCodeMap[statusCode];
    console.log(message);
    // 함수에 전달되는 상태코드에 따른 UI 업데이트나 로직 처리를 할 수 있음
}