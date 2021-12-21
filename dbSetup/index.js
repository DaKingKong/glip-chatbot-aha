require('dotenv').config();
const { Bot} = require('./botModel');
const { Service} = require('./serviceModel');

async function dbSetup() {
    await Bot.sync();
    await Service.sync();
    console.log('db setup done.');
}

dbSetup();