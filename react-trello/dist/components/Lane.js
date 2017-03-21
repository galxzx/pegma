'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _Base = require('../styles/Base');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reactDnd = require('react-dnd');

var _update = require('react/lib/update');

var _update2 = _interopRequireDefault(_update);

var _DragType = require('../helpers/DragType');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var laneActions = require('../actions/LaneActions');

var Lane = function (_Component) {
  _inherits(Lane, _Component);

  function Lane() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Lane);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Lane.__proto__ || Object.getPrototypeOf(Lane)).call.apply(_ref, [this].concat(args))), _this), _this.state = { loading: false, currentPage: 1, cards: _this.props.cards }, _this.handleScroll = function (evt) {
      var node = evt.target;
      var elemScrolPosition = node.scrollHeight - node.scrollTop - node.clientHeight;
      var onLaneScroll = _this.props.onLaneScroll;

      if (elemScrolPosition <= 0 && onLaneScroll && !_this.state.loading) {
        var currentPage = _this.state.currentPage;

        _this.setState({ loading: true });
        var nextPage = currentPage + 1;
        onLaneScroll(nextPage, _this.props.id).then(function (moreCards) {
          _this.setState({ loading: false, currentPage: nextPage });
          _this.props.actions.updateLane({ laneId: _this.props.id, newCards: moreCards });
        });
      }
    }, _this.laneDidMount = function (node) {
      if (node) {
        node.addEventListener('scroll', _this.handleScroll);
      }
    }, _this.moveCard = function (dragIndex, hoverIndex) {
      var cards = _this.state.cards;

      var dragCard = cards[dragIndex];

      _this.setState((0, _update2.default)(_this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        }
      }));
    }, _this.sameCards = function (cardsA, cardsB) {
      return cardsA.length === cardsB.length && cardsA.every(function (el, ix) {
        return el.id === cardsB[ix].id;
      });
    }, _this.removeCard = function (listId, cardId) {
      _this.props.actions.removeCard({ laneId: listId, cardId: cardId });
    }, _this.renderDragContainer = function () {
      var _this$props = _this.props,
          connectDropTarget = _this$props.connectDropTarget,
          laneSortFunction = _this$props.laneSortFunction,
          onCardClick = _this$props.onCardClick,
          id = _this$props.id;

      return connectDropTarget(_react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Base.DraggableList,
          null,
          _this.sortCards(_this.state.cards, laneSortFunction).map(function (card, idx) {
            return _react2.default.createElement(_Card2.default, { id: card.id,
              key: card.id,
              index: idx,
              listId: id,
              draggable: _this.props.draggable,
              handleDragStart: _this.props.handleDragStart,
              handleDragEnd: _this.props.handleDragEnd,
              title: card.title,
              moveCard: _this.moveCard,
              removeCard: _this.removeCard,
              label: card.label,
              description: card.description,
              daysLeft: card.daysLeft,
              onClick: function onClick() {
                return onCardClick && onCardClick(card.id, card.metadata);
              } });
          })
        )
      ));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Lane, [{
    key: 'sortCards',
    value: function sortCards(cards, sortFunction) {
      if (!cards) return [];
      if (!sortFunction) return cards;
      return cards.concat().sort(function (card1, card2) {
        return sortFunction(card1, card2);
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.sameCards(this.props.cards, nextProps.cards)) {
        this.setState({ cards: nextProps.cards });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !this.sameCards(this.props.cards, nextProps.cards) || nextState !== this.state;
    }
  }, {
    key: 'render',
    value: function render() {
      var loading = this.state.loading;

      var _props = this.props,
          id = _props.id,
          title = _props.title,
          label = _props.label,
          otherProps = _objectWithoutProperties(_props, ['id', 'title', 'label']);

      return _react2.default.createElement(
        _Base.Section,
        _extends({}, otherProps, { key: id, innerRef: this.laneDidMount }),
        _react2.default.createElement(
          _Base.Header,
          null,
          _react2.default.createElement(
            _Base.Title,
            null,
            title
          ),
          _react2.default.createElement(
            _Base.RightContent,
            null,
            label
          )
        ),
        this.renderDragContainer(),
        loading && _react2.default.createElement(_Loader2.default, null)
      );
    }
  }]);

  return Lane;
}(_react.Component);

Lane.propTypes = {
  id: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string.isRequired,
  laneSortFunction: _react.PropTypes.func,
  cards: _react.PropTypes.array,
  label: _react.PropTypes.string,
  onLaneScroll: _react.PropTypes.func,
  handleDragStart: _react.PropTypes.func,
  handleDragEnd: _react.PropTypes.func
};

var cardTarget = {
  drop: function drop(props, monitor, component) {

    var draggedObj = monitor.getItem();

    var id = props.id;

    if (id !== draggedObj.listId) {
      props.actions.addCard({ laneId: id, card: draggedObj.card });
    } else {
      props.actions.updateCards({ laneId: id, cards: component.state.cards });
    }
    return {
      listId: id
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { actions: (0, _redux.bindActionCreators)(laneActions, dispatch) };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)((0, _reactDnd.DropTarget)(_DragType.DragType.CARD, cardTarget, collect)(Lane));