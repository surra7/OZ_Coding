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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var ApiResponse = /** @class */ (function () {
    function ApiResponse() {
    }
    return ApiResponse;
}());
var ErrorResponse = /** @class */ (function () {
    function ErrorResponse() {
    }
    return ErrorResponse;
}());
function handleApiresponse(response) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (response instanceof ApiResponse) {
                // 데이터 처리
            }
            else if (response instanceof ErrorResponse) {
                // 에러 처리
            }
            return [2 /*return*/];
        });
    });
}
var apiResponse = new ApiResponse();
var errorResponse = new ErrorResponse();
handleApiresponse(apiResponse);
handleApiresponse(errorResponse);
// 타입 가드 (type predicates)
// response가 ErrorResponse와 일치하는지 판별해서 반환
function isErrorResponse(response) {
    return response.message !== undefined;
}
var response = { message: "error.." };
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
        data.forEach(function (item) {
            console.log(item);
        });
    }
    else {
        console.log(data);
    }
}
