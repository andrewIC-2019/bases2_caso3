"use strict";
exports.__esModule = true;
exports.kindnessrouter = void 0;
var express = require("express");
var app = express();
exports.kindnessrouter = app;
//esto se esta resolviendo in-memory
var saludos = ["hola", "buen día", "pura vida", "matice", "pasela ak 6+1", "buena vibra"];
app.get("/saludar", function (req, res, next) {
    res.json({ message: saludos[Math.trunc(Math.random() * saludos.length)] });
});
app.post("/saludarTo", function (req, res, next) {
    res.json({ message: saludos[Math.trunc(Math.random() * saludos.length)] + " " + req.body.quien });
});
