'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingBar = exports.LoaderDiv = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    0% {\n      transform: scale(1);\n    }\n    20% {\n      transform: scale(1, 2.2);\n    }\n    40% {\n      transform: scale(1);\n    }\n'], ['\n    0% {\n      transform: scale(1);\n    }\n    20% {\n      transform: scale(1, 2.2);\n    }\n    40% {\n      transform: scale(1);\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  text-align: center;\n  margin: 15px 0px;\n'], ['\n  text-align: center;\n  margin: 15px 0px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n  margin: 0px 2px;\n  width: 4px;\n  height: 18px;\n  border-radius: 4px;\n  animation: ', ' 1s ease-in-out infinite;\n  background-color: #777;\n  \n  &:nth-child(1) {\n    animation-delay: 0.0001s;\n  }\n  &:nth-child(2) {\n    animation-delay: 0.09s;\n  }\n  &:nth-child(3) {\n    animation-delay: .18s;\n  }\n  &:nth-child(4) {\n    animation-delay: .27s;\n  }\n'], ['\n  display: inline-block;\n  margin: 0px 2px;\n  width: 4px;\n  height: 18px;\n  border-radius: 4px;\n  animation: ', ' 1s ease-in-out infinite;\n  background-color: #777;\n  \n  &:nth-child(1) {\n    animation-delay: 0.0001s;\n  }\n  &:nth-child(2) {\n    animation-delay: 0.09s;\n  }\n  &:nth-child(3) {\n    animation-delay: .18s;\n  }\n  &:nth-child(4) {\n    animation-delay: .27s;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var keyframeAnimation = (0, _styledComponents.keyframes)(_templateObject);
var LoaderDiv = exports.LoaderDiv = _styledComponents2.default.div(_templateObject2);

var LoadingBar = exports.LoadingBar = _styledComponents2.default.div(_templateObject3, keyframeAnimation);