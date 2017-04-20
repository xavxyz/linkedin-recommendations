'use strict';

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n  \n  @import url(\'https://fonts.googleapis.com/css?family=Lato:700\');\n  \n  body {\n    font-family: \'Lato\', sans-serif;\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n    background: ', '; \n    color: ', ';\n  }\n'], ['\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n  \n  @import url(\'https://fonts.googleapis.com/css?family=Lato:700\');\n  \n  body {\n    font-family: \'Lato\', sans-serif;\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n    background: ', '; \n    color: ', ';\n  }\n']);

(0, _styledComponents.injectGlobal)(_templateObject, _colors2.default.white, _colors2.default.darkBlue);