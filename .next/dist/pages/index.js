'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

require('../styles');

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/xavier/Dev/apollo/linkedin-recommendations/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n'], ['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n']);

var AppWrapper = _styledComponents2.default.div(_templateObject);

exports.default = function () {
  return _react2.default.createElement(AppWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_Header2.default, { animationCompleted: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }));
};