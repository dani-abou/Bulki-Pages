"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var express = require('express');

var WebServer = /*#__PURE__*/function () {
  function WebServer() {
    _classCallCheck(this, WebServer);

    this.app = express();
    this.app.use(express["static"]('dist/public'));
  }

  _createClass(WebServer, [{
    key: "start",
    value: function start() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        try {
          _this.server = _this.app.listen(3000, function () {
            resolve();
          });
        } catch (e) {
          console.error(e);
          reject(e);
        }
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this2.server.close(function () {
            resolve();
          });
        } catch (e) {
          console.error(e.message);
          reject(e);
        }
      });
    }
  }]);

  return WebServer;
}();

exports["default"] = WebServer;