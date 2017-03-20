'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BoardContainer = require('./BoardContainer');

var _BoardContainer2 = _interopRequireDefault(_BoardContainer);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _BoardReducer = require('../reducers/BoardReducer');

var _BoardReducer2 = _interopRequireDefault(_BoardReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _redux.createStore)(_BoardReducer2.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

var Board = function (_Component) {
  _inherits(Board, _Component);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
  }

  _createClass(Board, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_BoardContainer2.default, this.props)
      );
    }
  }]);

  return Board;
}(_react.Component);

exports.default = Board;


Board.propTypes = {
  data: _react.PropTypes.object.isRequired,
  onLaneScroll: _react.PropTypes.func,
  onCardClick: _react.PropTypes.func,
  eventBusHandle: _react.PropTypes.func,
  laneSortFunction: _react.PropTypes.func,
  draggable: _react.PropTypes.bool,
  handleDragStart: _react.PropTypes.func,
  handleDragEnd: _react.PropTypes.func,
  onDataChange: _react.PropTypes.func
};