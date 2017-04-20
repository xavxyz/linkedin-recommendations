webpackHotUpdate(5,{

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(562);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(563);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

__webpack_require__(573);

var _Header = __webpack_require__(570);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/xavier/Dev/apollo/linkedin-recommendations/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/xavier/Dev/apollo/linkedin-recommendations/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(82)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 571:
false,

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  darkBlue: '#03243A',
  blue: '#007AB9',
  green: '#74C239',
  grey: '#C5C5C5',
  white: '#FCFCFC'
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/xavier/Dev/apollo/linkedin-recommendations/styles/colors.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/xavier/Dev/apollo/linkedin-recommendations/styles/colors.js"); } } })();

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _taggedTemplateLiteral2 = __webpack_require__(562);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = __webpack_require__(563);

var _colors = __webpack_require__(572);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n  \n  @import url(\'https://fonts.googleapis.com/css?family=Lato:700\');\n  \n  body {\n    font-family: \'Lato\', sans-serif;\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n    background: ', '; \n    color: ', ';\n  }\n'], ['\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n  \n  @import url(\'https://fonts.googleapis.com/css?family=Lato:700\');\n  \n  body {\n    font-family: \'Lato\', sans-serif;\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n    background: ', '; \n    color: ', ';\n  }\n']);

(0, _styledComponents.injectGlobal)(_templateObject, _colors2.default.white, _colors2.default.darkBlue);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/xavier/Dev/apollo/linkedin-recommendations/styles/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/xavier/Dev/apollo/linkedin-recommendations/styles/index.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9mMjM5Iiwid2VicGFjazovLy8uL3N0eWxlcy9jb2xvcnMuanM/YzFkNSIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXguanM/ZTY2OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBQ1A7O0FBQ087Ozs7Ozs7Ozs7QUFFUCxJQUFNLGFBQWEsMkJBQU8sSUFPMUI7O2tCQUFlO3lCQUFPLGNBQUQ7O2dCQUFBO2tCQUFZO0FBQVo7QUFBQSxxQkFBYSxrQ0FBTyxvQkFBUjtnQkFBQTtrQkFBQTtBQUFBOztBQUFqQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDVEU7UUFDQTtTQUNBO1FBQ0E7U0FBTztBQUpQLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNETzs7QUFDRjs7Ozs7Ozs7QUFFUCxxREFha0IsaUJBQU8sT0FDWixpQkFBTyxVIiwiZmlsZSI6IjUuOGIwNDNhZmZlNWJhYTg0Mzk3MWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0ICcuLi9zdHlsZXMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5cbmNvbnN0IEFwcFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiA8QXBwV3JhcHBlcj48SGVhZGVyIGFuaW1hdGlvbkNvbXBsZXRlZCAvPjwvQXBwV3JhcHBlcj47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZGFya0JsdWU6ICcjMDMyNDNBJyxcbiAgYmx1ZTogJyMwMDdBQjknLFxuICBncmVlbjogJyM3NEMyMzknLFxuICBncmV5OiAnI0M1QzVDNScsXG4gIHdoaXRlOiAnI0ZDRkNGQycsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3R5bGVzL2NvbG9ycy5qcyIsImltcG9ydCB7IGluamVjdEdsb2JhbCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuXG5pbmplY3RHbG9iYWxgXG4gICosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NzAwJyk7XG4gIFxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLndoaXRlfTsgXG4gICAgY29sb3I6ICR7Y29sb3JzLmRhcmtCbHVlfTtcbiAgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0eWxlcy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=