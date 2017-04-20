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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/xavier/Dev/apollo/linkedin-recommendations/components/Header.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 100vw;\n  height: 20vh;\n  position: relative;\n  margin-top: 30px;\n  \n  ', '\n'], ['\n  width: 100vw;\n  height: 20vh;\n  position: relative;\n  margin-top: 30px;\n  \n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 20vw;\n  height: 20vh;\n  position: absolute;\n  left: ', ';\n'], ['\n  width: 20vw;\n  height: 20vh;\n  position: absolute;\n  left: ', ';\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  height: auto;\n'], ['\n  width: 100%;\n  height: auto;\n']);

var Header = function Header(_ref) {
  var animationCompleted = _ref.animationCompleted,
      withText = _ref.withText;
  return _react2.default.createElement(HeaderWrapper, { animationCompleted: animationCompleted, withText: withText, __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(ImageContainer, { profilePicture: true, animationCompleted: animationCompleted, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(Image, { src: 'https://cl.ly/0Y3t303W153E/Me.png', title: 'Me', alt: 'Me', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  })), _react2.default.createElement(ImageContainer, { animationCompleted: animationCompleted, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(Image, { src: 'https://cl.ly/181t2d322O34/linkedin.png', title: 'Linkedin', alt: 'Linkedin', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })));
};

Header.propTypes = {
  animationCompleted: _react.PropTypes.bool,
  withText: _react.PropTypes.bool
};

// return the initial or final position of the image depending on
// - is the animation completed or not? (bool)
// - is the image the profile picture or not? (bool)
var imagePositioner = function imagePositioner(_ref2) {
  var animationCompleted = _ref2.animationCompleted,
      profilePicture = _ref2.profilePicture;

  var position = {
    initial: profilePicture ? 0 : '80%',
    final: profilePicture ? '30%' : '45%'
  };

  return animationCompleted ? position.final : position.initial;
};

var HeaderWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.withText && '\n    &:after {\n      font-size: 2rem;\n      font-weight: 700;\n      letter-spacing: 1px;\n      text-transform: uppercase;\n      text-align: center;\n      content: "Xavier\'s Linkedin recommendations";\n      width: 100vw;\n      position: absolute;\n      bottom: -10rem;\n    }\n  ';
});

var ImageContainer = _styledComponents2.default.div(_templateObject2, function (props) {
  return imagePositioner(props);
});

var Image = _styledComponents2.default.img(_templateObject3);

exports.default = Header;