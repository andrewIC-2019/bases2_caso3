"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var http = require("http");
var common_1 = require("./common");
/*
INICIO DEL SERVICIO
*/
//abre un servidor rest en el puerto 5000
//lo arranca
var port = 5000;
var logger = new common_1.Logger();
var mongoose = require('mongoose');
app_1["default"].set('port', port);
var server = http.createServer(app_1["default"]);
server.listen(port);
mongoose.connect('mongodb://localhost:27017/subastas', {
    useNewUrlParser: true
})
    .then(function () { return console.log('Conectado a la base de datos'); })["catch"](function (err) { return console.log(err); });
server.on('listening', function () {
    var addr = server.address();
    var bind = (typeof addr === 'string') ? "pipe " + addr : "port " + addr.port;
    logger.info("Listening on " + bind);
});
//exporta lo que esta en la aplicacion (app)
module.exports = app_1["default"];
