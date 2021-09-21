import App from './app';
import * as  http from 'http'
import { Logger } from './common'

/*
INICIO DEL SERVICIO
*/

//abre un servidor rest en el puerto 5000
//lo arranca
const port = 5000;
const logger = new Logger();
const mongoose = require('mongoose');

App.set('port', port);
const server = http.createServer(App);
server.listen(port);

mongoose.connect('mongodb://localhost:27017/subastas', {
    useNewUrlParser : true
})
    .then(() => console.log('Conectado a la base de datos'))
    .catch((err: any) => console.log(err));

server.on('listening', () => {
    const addr = server.address();
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    logger.info(`Listening on ${bind}`)
 });

 //exporta lo que esta en la aplicacion (app)
module.exports = App;