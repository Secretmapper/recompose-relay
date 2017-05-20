'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = require('react-relay/classic');

var _reactRelay2 = _interopRequireDefault(_reactRelay);

var _toClass = require('recompose/toClass');

var _toClass2 = _interopRequireDefault(_toClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createContainer = function createContainer(options) {
  return function (BaseComponent) {
    return _reactRelay2.default.createContainer((0, _toClass2.default)(BaseComponent), options);
  };
};

exports.default = createContainer;
