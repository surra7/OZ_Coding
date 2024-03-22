// npm init -y 로 package.json 파일 생성 및 초기화
// npm install axios로 axois 패키지 설치
// node_modules 디렉터리에는 package.json에 있는 모듈뿐만 아니라,
// pakage.json에 있는 모듈이 의존하고 있는 모듈 전부를 포함하고 있음

const axios = require("axios");

axios
  .get("https://naver.com")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
