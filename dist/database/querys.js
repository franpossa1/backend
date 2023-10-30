"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var queries = exports.queries = _defineProperty({
  getAllProducts: "SELECT *  FROM  [dbo].[Products]",
  createNewProduct: "INSERT INTO [Products] (name,description,quantity) VALUES (@name,@description,@quantity)",
  getProductById: "SELECT *  FROM  [dbo].[Products] where Id = @id",
  deleteProductById: "DELETE   FROM  [dbo].[Products] where Id = @id"
}, "createNewProduct", "UPDATE [Products] SET Name = @name, Description = @description, Quantity =@quantity where Id = @id");