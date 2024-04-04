// Express를 사용하면 따로 status code나 Content Type를 명시해주지 않아도 됨
const express = require("express");
const usersRouter = require("./routes/users.router");
const postsRouter = require("./routes/posts.router");

const PORT = 4000;
const path = require("path");
const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// public 경로 안에 있는 html, css, 이미지 파일등을 제공
app.use("/static", express.static(path.join(__dirname, "public")));

// 그냥 req.body.name를 보내면 undefined가 나옴
// => 해결: express.json()사용 => body를 파싱해줌
// => 또는 body-parser 설치 -> body-parser가져와서 .json()으로 사용
app.use(express.json());
// 미들웨어
// next로 다음 미들웨어로 넘어가다가 마지막 메인 테스크를 마치면 지나갔던 미들웨어를 거꾸로 한번더 거쳐서 되돌아감
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`start: ${req.method} ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`end: ${req.method} ${req.baseUrl}${req.url} ${diffTime}ms`);
  // req.url은 라우터 인스턴스가 마운트된 URL 경로.
  // baseUrl을 넣어야 / users가 나옴. 아니면 그냥 / 만 나옴
});

app.get("/", (req, res) => {
  res.render("index", {
    imageTitle: "It is a sky 2",
  });
});

app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
