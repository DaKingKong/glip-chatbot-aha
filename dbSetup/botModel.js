const Sequelize = require('sequelize');
const { sequelize } = require('./sequelize');

exports.Bot = sequelize.define('bot', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    token: {
        type: Sequelize.JSON,
    },
    data: {
        // all other data associated with this bot
        type: Sequelize.JSON,
    },
});
