const Sequelize = require('sequelize');
const { sequelize } = require('./sequelize');

exports.Service = sequelize.define('service', {
    id: {
        // service ID
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        // service name
        type: Sequelize.STRING,
    },
    botId: {
        // Glip bot ID
        type: Sequelize.STRING,
    },
    groupId: {
        // Glip group ID
        type: Sequelize.STRING,
    },
    userId: {
        // Glip user ID
        type: Sequelize.STRING,
    },
    data: {
        // all other data associcated with this service
        type: Sequelize.JSON,
    },
});