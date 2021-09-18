"use strict";
exports.__esModule = true;
exports.ArticleController = void 0;
var data_articles_1 = require("../repositories/data_articles");
var common_1 = require("../common");
var ArticleController = /** @class */ (function () {
    function ArticleController() {
        this.log = new common_1.Logger();
        try {
        }
        catch (e) {
            this.log.error(e);
        }
    }
    ArticleController.getInstance = function () {
        if (!this.instance) {
            this.instance = new ArticleController();
        }
        return this.instance;
    };
    ArticleController.prototype.listArticles = function () {
        var dynamo = new data_articles_1.articles_data();
        return dynamo.getAllArticles();
    };
    return ArticleController;
}());
exports.ArticleController = ArticleController;
