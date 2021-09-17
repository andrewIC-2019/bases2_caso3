"use strict";
exports.__esModule = true;
exports.articlesrouter = void 0;
var express = require("express");
var common_1 = require("../common");
var controllers_1 = require("../controllers");
var app = express();
exports.articlesrouter = app;
var log = new common_1.Logger();
app.get("/list", function (req, res, next) {
    controllers_1.ArticleController.getInstance().listArticles()
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        log.error(err);
        return "";
    });
});
