// 5-1. 에러 처리
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 타입스크립트에서의 에러 처리는 자바스크립트의 기능을 기반으로 한다
// try-catch 사용시 catch 블럭의 에러 매개변수에 타입지정 가능
// try {
//     // 에러가 발생할 수 있는 코드
// } catch (error) {
//     console.error(error.message); // 에러를 매개변수로 받아서 메세지에 접근할 수 있음
// } finally {
//  // 에러 여부와 상관없이 항상 실행되는 코드
// }
function checkPositiveNumber(num) {
    if (num < 0) {
        // 예외 발생
        throw new Error("number should be positive");
    }
    console.log("".concat(num, " is a positive number"));
}
try {
    checkPositiveNumber(10);
    checkPositiveNumber(-10);
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "CustomError";
        return _this;
    }
    return CustomError;
}(Error));
try {
    throw new CustomError("custom error...");
}
catch (error) {
    if (error instanceof CustomError) {
        console.error(error.message);
    }
}
