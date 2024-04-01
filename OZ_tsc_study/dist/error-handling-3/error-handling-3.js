// 5-3. 모듈
// 타입스크립트에서 모듈은 관련된 코드가 모여있는 하나의 파일을 의미
// 모듈은 자체의 스코프를 가지며, 모듈 안에서 정의된 변수, 함수, 클래스 등은 기본적으로 해당 모듈 내부에서만 접근 가능
// import & export 키워드를 사용하는 파일을 모듈로 간주
// utils 모듈에서 함수 불러오기
// import add from './utils.js' // 또는 './utils'
// 모듈을 불러올때 as를 사용하면 이름을 바꿀 수 있음
import { log as logger, appName, User } from './utils';
console.log(appName);
var user = new User('John');
logger(user.getName());
var student = {
    id: 123,
    name: "Jess",
    age: 18,
};
function createStudentProfile(profile) {
    console.log("".concat(profile.studentId, ", ").concat(profile.photoUrl));
}
createStudentProfile({
    studentId: student.id,
    photoUrl: "https://somephotourl.png",
});
