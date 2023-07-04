// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const fs = require('fs');
const venom = require('venom-bot');

const pathToFile = __dirname+ '/tokens'

if (fs.existsSync(pathToFile)) {
  fs.rmSync(pathToFile, { recursive: true, force: true })
}

venom
  .create({
    session: 'session-name' //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });
  
function start(client) {
  client.onMessage((message) => {
    console.log(`---------------------------------------`)
    console.log(message)
    console.log(`---------------------------------------`)
    client
      .sendText(message.from, 'teste')
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
  });
}