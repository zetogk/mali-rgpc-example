const Mali = require('mali');
const path = require('path');

const PROTO_PATH = path.resolve(__dirname, './mail.proto')

function sendEmail (ctx) {
    ctx.res = { send: 1, message: 'The message sent was ' + ctx.req.message }
}

function main () {
    const app = new Mali(PROTO_PATH, 'Notification')
    app.use({ sendEmail });
    app.start('0.0.0.0:300');
}
  
main();