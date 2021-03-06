"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var common_1 = require("../common");
var kindness_1 = require("./kindness");
var articlesrouter_1 = require("./articlesrouter");
var articulosrouter_1 = require("./articulosrouter");
/*
LUEGO DE LA APLICACION, CAE AL ENRUTADOR, ME LLEVA A LOS
CONTROLADORES
*/
//estructura basica a seguir
//este monta todos los routes
var Routes = /** @class */ (function () {
    function Routes() {
        this.express = express();
        this.logger = new common_1.Logger();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    Routes.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    Routes.prototype.routes = function () {
        this.express.use('/kind', kindness_1.kindnessrouter);
        this.express.use('/articles', articlesrouter_1.articlesrouter);
        this.express.use('/articulos', articulosrouter_1.articulosrouter); //************************************************ */
        this.logger.info("Kindness route loaded");
    };
    return Routes;
}());
exports["default"] = new Routes().express;
