"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
console.log(process.env.PORT);
var _default = exports["default"] = {
  port: process.env.PORT || 4300
};