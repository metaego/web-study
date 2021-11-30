var Sequelize = require('sequelize');
var sequelize;

sequelize = new Sequelize("class101", "root", "root1111", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    timezone: "+09:00",
    define: {
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamps: true,
        freezeTableName: true // 테이블 만들때 고정적으로 복수형 안쓰고 단수형도 쓰겠다는 설정
    }
})

var db = {};
db.users = sequelize.import(__dirname + "/users.js");
db.board = sequelize.import(__dirname + "/board.js")

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;