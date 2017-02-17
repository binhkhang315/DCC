var SequelizeDatatypes = require('sequelize');

module.exports=
{
    username: {
        type: SequelizeDatatypes.STRING,
        allowNull: false
    },
    status: {
        type: SequelizeDatatypes.STRING,
        allowNull: true
    },
    dob: {
        type: SequelizeDatatypes.STRING,
        allowNull: true
    },
    phone: {
        type: SequelizeDatatypes.STRING,
        allowNull: true
    },
    location: {
        type: SequelizeDatatypes.STRING,
        allowNull: true
    },
    email: {
        type: SequelizeDatatypes.STRING,
        allowNull: false
    },
    avatar: {
        type: SequelizeDatatypes.STRING,
        allowNull: false
    },
    isAdmin: {
        type: SequelizeDatatypes.BOOLEAN,
        allowNull: true
    },
    isTrainee: {
        type: SequelizeDatatypes.BOOLEAN,
        allowNull: true
    },
    isTrainer: {
        type: SequelizeDatatypes.BOOLEAN,
        allowNull: true
    },
    belong2Team:
    {
        type: SequelizeDatatypes.STRING,
        allowNull: true
    },
    userType:{
        type: SequelizeDatatypes.STRING,
        allowNull: true
    },
    isExperienced:{
        type: SequelizeDatatypes.BOOLEAN,
        allowNull: true
    }
}
