'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LaneHelper = require('../helpers/LaneHelper');

var _LaneHelper2 = _interopRequireDefault(_LaneHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var boardReducer = function boardReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { lanes: [] };
  var action = arguments[1];

  switch (action.type) {
    case 'LOAD_BOARD':
      return action.payload;
    case 'UPDATE_LANE':
      return _LaneHelper2.default.appendCardsToLane(state, action.payload);
    case 'ADD_CARD':
      return _LaneHelper2.default.appendCardToLane(state, action.payload);
    case 'REMOVE_CARD':
      return _LaneHelper2.default.removeCardFromLane(state, action.payload);
    case 'MOVE_CARD':
      return _LaneHelper2.default.moveCardAcrossLanes(state, action.payload);
    case 'UPDATE_CARDS':
      return _LaneHelper2.default.updateCardsForLane(state, action.payload);
    default:
      return state;
  }
};

exports.default = boardReducer;