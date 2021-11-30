module.exports = function (sequelize, DataTypes) {
    return sequelize.define('board', {
        idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allwNull: false
        },
        user_id: {
            type: DataTypes.STRING(250)
        },
        title: {
            type: DataTypes.STRING(30),
            allwNull: false
        },
        text: {
            type: DataTypes.STRING(500)
        }
    })

}