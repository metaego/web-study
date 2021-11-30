//router를 분리해서 관리
const express = require('express') // express 가져오기
const router = express.Router(); //주소를 만드는 도구를 변수에 담기

const db = require('../model/db');

//주소를 만들 수 있게 도와주는 도구를 담은 변수 router로 주소 생성
router.get("/", function (req, res) {

    // let query = req.query
    // let page = req.query.page
    // console.log("[QUERY]")
    // console.log(query)
    // console.log(page)

    // res.send({ 'key': 'value' });


    res.render('index', { title: "EJS 메인페이지" }) // render는 views 폴더를 바라보고 있는 상태이므로 파일 이름만 지정해주면 됨
    // 페이지를 render할 때 데이터도 같이 보내줌(그림파일 보내줄 때는 render함수 사용)
})

router.get('/about', function (req, res) {
    res.send('about page'); // 데이터를 보내줄 때는 send함수 사용
})

router.post("/postapi", function (req, res) {
    let body = req.body;
    console.log(body)
    res.send('post send')
})


router.get("/data/create", function (req, res) {
    let user_id = parseInt(Math.random() * 10000) // parseInt: 정수타입으로 만들기, (Math.random(): 랜덤 숫자 생성
    db.users.create({ user_id: user_id }).then(function (result) {
        res.send({ success: 200 })
    }) // db.js의 db에 있는 user_id 컬럼: let user_id
})

router.get("/data/read", function (req, res) {
    db.users.findAll().then(function (result) {
        res.send({ success: 200, data: result })
    })
})
//라우터라는 변수를 밖으로 내보내기
module.exports = router