// 필요한 도구 import
const express = require('express');
// node_modules 폴더에서 express를 찾고 불러와 express라는 변수에 담음
const app = express();
// 코드상 좀 더 아래에 위치하는 게 보기 좋으나 학습 중이므로 관련 개념 및 코드는 일부러 가까이 작성


//보안 도구(helmet)
const helmet = require("helmet");
app.use(helmet()); // 보안 관련 도구. 


// view 엔진 ejs 탬플릿 import
const ejs = require("ejs")

// db 임포트
const db = require('./model/db')


// ==================================================================
// ==================================================================
//view 엔진과 html, css파일 경로 명시 
app.set('view engine', 'ejs'); // view파일을 보여줄 때 사용할 엔진 ejs 템플릿 명시. 확장자는 ejs인 것만 그림파일로 간주하므로 확장자를 다 ejs로 바꿔줘야함
app.set('views', './views') // 내가 만든 view파일 경로 설정(render함수가 바라보는 폴더 설정)
app.use('/public', express.static(__dirname + '/public')); // css파일이나 이미지 파일의 상대적 경로 설정


//post 방식의 api를 서버에서 활용 가능하게 설정
app.use(express.json());
app.use(express.urlencoded());


// middleware 규칙 설정
const mainRouter = require('./router/mainRouter'); //npm으로 설치한 노드도구는 이름으로 호출하면 되나 커스텀한 js파일은 주소로 호출
// const db = require('./model/db');
app.use('/', mainRouter)


// ==================================================================
// ==================================================================
// 서버 스위치 설정
app.listen(3000, function (req, res) {

    db.sequelize.sync({ force: false }) // db 전원 스위치 코드. 
    //force가 true인 경우 서버가 실행될 때마다 초기화되므로, 개발 중일때는 false로 하여 덮어쓰기가 되도록 설정

    console.log('서버가 실행되고 있다')
})
// listen: 서버를 켜주는 스위치 개념
// 컴퓨터의 3000번 방을 쓸 것(port: 3000 으로 설정)
