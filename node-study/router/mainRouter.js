//router를 분리해서 관리
const express = require('express') // express 가져오기
const router = express.Router(); //주소를 만드는 도구를 변수에 담기

//주소를 만들 수 있게 도와주는 도구를 담은 변수 router로 주소 생성
router.get("/", function (req, res) {
    res.send('Hello world');
})

router.get('/about', function (req, res) {
    res.send('about page');
})

//라우터라는 변수를 밖으로 내보내기
module.exports = router