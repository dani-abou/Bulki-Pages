"use strict";

var _web = _interopRequireDefault(require("./web.server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var webServer = new _web["default"]();
webServer.start().then(function () {
  console.log('Web server started!');
})["catch"](function (err) {
  console.error(err);
  console.error('Failed to start web server');
});