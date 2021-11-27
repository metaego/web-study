const express = require('express');
// node_modules 폴더에서 express를 찾아서 불러와 express라는 변수에 담음
const helmet = require("helmet");
const app = express();
app.use(helmet()); // 보안 관련 도구

// middleware 규칙 설정
const mainRouter = require('./router/mainRouter') //npm으로 설치한 노드도구는 이름으로 호출하면 되나 커스텀한 js파일은 주소로 호출
app.use('/', mainRouter)

app.listen(3000, function (req, res) {
    console.log('서버가 실행되고 있다')
})
// listen: 서버를 켜주는 스위치 개념
// 컴퓨터의 3000번 방을 쓸 것
