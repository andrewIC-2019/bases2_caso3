"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var routes_1 = require("./routes/routes");
/*
APLICACION DE SERVICIO
*/
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    // Se agregan los middleware
    // deprecated porque ya lo hace nativo
    App.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    //Abre una ruta a api
    //si no viene api, request invalido
    //luego de /api, se monta el archivo routes:
    //  articlesrouter, kindness, routes
    App.prototype.routes = function () {
        this.express.use('/api', routes_1["default"]);
        this.express.use('*', function (req, res) {
            res.send("Request invalido");
        });
    };
    return App;
}());
exports["default"] = new App().express;
