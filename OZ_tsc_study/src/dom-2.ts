// 4-2. 타입 좁히기 Type Narrowing

// typeof

type Id = number | string;

function getId(id: Id) {
    if (typeof id === 'number') {
        return id;
    }
    return Number(id);
}

getId(1);
getId("1");


// 동일성/동등성 좁히기 (equality narrowing)

type Option = "on" | "off";

function power(option: Option) {
    if (option === "off") {
        console.log("power off");
    } else {
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
    data: any;
}

class ErrorResponse {
    message: string | undefined;
}

async function handleApiresponse(response: any) {
    if (response instanceof ApiResponse) {
        // 데이터 처리
    } else if (response instanceof ErrorResponse) {
        // 에러 처리
    }
}

const apiResponse = new ApiResponse();
const errorResponse = new ErrorResponse();

handleApiresponse(apiResponse);
handleApiresponse(errorResponse);


// 타입 가드 (type predicates)

// response가 ErrorResponse와 일치하는지 판별해서 반환
function isErrorResponse(response: ApiResponse | ErrorResponse): response is ErrorResponse{
    return (response as ErrorResponse).message !== undefined;
}

const response = { message: "error.." };

if (isErrorResponse(response)) {
    // 에러 케이스
    console.log(response.message);
}


// 식별 가능한 유니언 타입 (discriminated union)
// 객체가 가진 속성의 값을 기준으로 비교해서 타입을 좁힘

type SuccessResponseType = {
    type: "success";
    data: any;
}

type ErrorResponseType = {
    type: "error",
    message: string;
}

type ApiResponseType = SuccessResponseType | ErrorResponseType;

function handleResponse(response: ApiResponseType) {
    if (response.type === "success") {
        console.log('data: ', response.data);
    } else {
        console.log(response.message);
    }
}

function processData(data: string | string[] | number | number[]): void {
    if (Array.isArray(data)) {
        data.forEach(item => {
            console.log(item);
        })
    } else {
        console.log(data);
    }
}