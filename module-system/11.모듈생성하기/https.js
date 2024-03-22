//const request = require("./request");
//const response = require("./response");
// 확장자 .js를 넣지 않는 이유: require 함수에서 자동으로 확장자를 적용시킴

// function makeRequest(url, data) {
//   // 요청 보내기
//   request.send(url, data);

//   // 데이터 return 하기
//   return response.read();
// }

// 더 간단하게 사용하는 방법
const { send } = require("./request");
const { read } = require("./response");

function makeRequest(url, data) {
  // 요청 보내기
  send(url, data);

  // 데이터 return 하기
  return read();
}

const responseData = makeRequest("https://naver.com", "any data");
console.log(responseData);
