const http = require("http");
const port = 4000;
// const server = http.createServer((req, res) => {
//     // writeHead는 한 번만 호출되어야 하며 end()가 호출되면
//     // 상태 코드와 응답 헤더를 클라이언트에 보냄
//   res.writeHead(200, {
//     "Content-Type": "text/plain",
//   });

//     // 데이터가 로드되었음을 서버에 알림
//   res.end("Hello World");
// });

// 문자열이 아닌 javascript object를 보여주기
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify({ a: "a", b: "b" }));
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
