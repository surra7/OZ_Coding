"use strict";
// 4-2. 타입 좁히기 Type Narrowing
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getId(id) {
    if (typeof id === 'number') {
        return id;
    }
    return Number(id);
}
getId(1);
getId("1");
function power(option) {
    if (option === "off") {
        console.log("power off");
    }
    else {
        console.log("power on");
    }
}
power("on");
power("off");
// in 키워드 사용하는 방법
// type iOS = { iMessage: () => void; }
// type android = { message: () => void; }
// function sendMessage(os: iOS | android) {
//     if ("iMessage" in os) {
//         os.iMessage(); // iOS로 좁혀진다
//     } else {
//         os.message(); // android로 좁혀진다
//     }
// }
// sendMessage({ iMessage: () => { console.log("sending iMessage") } });
// sendMessage({ message: () => console.log("sending message") });
// instanceof narrowing -> 요소가 특정 클래스에 속해있는지
class ApiResponse {
}
class ErrorResponse {
}
function handleApiresponse(response) {
    return __awaiter(this, void 0, void 0, function* () {
        if (response instanceof ApiResponse) {
            // 데이터 처리
        }
        else if (response instanceof ErrorResponse) {
            // 에러 처리
        }
    });
}
const apiResponse = new ApiResponse();
const errorResponse = new ErrorResponse();
handleApiresponse(apiResponse);
handleApiresponse(errorResponse);
// 타입 가드 (type predicates)
// response가 ErrorResponse와 일치하는지 판별해서 반환
function isErrorResponse(response) {
    return response.message !== undefined;
}
const response = { message: "error.." };
if (isErrorResponse(response)) {
    // 에러 케이스
    console.log(response.message);
}
function handleResponse(response) {
    if (response.type === "success") {
        console.log('data: ', response.data);
    }
    else {
        console.log(response.message);
    }
}
function processData(data) {
    if (Array.isArray(data)) {
        data.forEach(item => {
            console.log(item);
        });
    }
    else {
        console.log(data);
    }
}
