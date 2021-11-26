const express = require('express');
// node_modules 폴더에서 express를 찾아서 불러와 express라는 변수에 담음
const app = express();

app.get("/", function (req, res) {
    res.send('Hello world');
})
// get방식의 주소 만들기
// app에서 get이라는 주소를 만들고
// 주소를 쓰고 어떤 내용을 보여줄지 그 로직을 함수 안에 보여줌
// res.send: 상대방에게 보여줄 내용


app.listen(3000, function (req, res) {
    console.log('서버가 실행되고 있다')
})
// listen: 서버를 켜주는 스위치 개념
// 컴퓨터의 3000번 방을 쓸 것
