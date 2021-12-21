import {Bot, Service} from 'ringcentral-chatbot/dist/models'

async function setupDatabase (){
    await Bot.sync();
    await Service.sync();
}

setupDatabase();