"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var LaneHelper = {

  appendCardsToLane: function appendCardsToLane(state, _ref) {
    var laneId = _ref.laneId,
        newCards = _ref.newCards;

    var lanes = state.lanes.map(function (lane) {
      if (lane.id === laneId) {
        lane.cards = [].concat(_toConsumableArray(lane.cards), _toConsumableArray(newCards));
      }
      return lane;
    });
    return _extends({}, state, lanes);
  },

  appendCardToLane: function appendCardToLane(state, _ref2) {
    var laneId = _ref2.laneId,
        card = _ref2.card;

    return LaneHelper.appendCardsToLane(state, { laneId: laneId, newCards: [card] });
  },

  removeCardFromLane: function removeCardFromLane(state, _ref3) {
    var laneId = _ref3.laneId,
        cardId = _ref3.cardId;

    var lanes = state.lanes.map(function (lane) {
      if (lane.id === laneId) {
        lane.cards = lane.cards.filter(function (card) {
          return card.id !== cardId;
        });
      }
      return lane;
    });
    return _extends({}, state, lanes);
  },

  moveCardAcrossLanes: function moveCardAcrossLanes(state, _ref4) {
    var fromLaneId = _ref4.fromLaneId,
        toLaneId = _ref4.toLaneId,
        cardId = _ref4.cardId;

    var cardToMove = null;
    var interimLanes = state.lanes.map(function (lane) {
      if (lane.id === fromLaneId) {
        cardToMove = lane.cards.find(function (card) {
          return card.id === cardId;
        });
        lane.cards = lane.cards.filter(function (card) {
          return card.id !== cardId;
        });
      }
      return lane;
    });
    return LaneHelper.appendCardToLane({ lanes: interimLanes }, { laneId: toLaneId, card: cardToMove });
  },

  updateCardsForLane: function updateCardsForLane(state, _ref5) {
    var laneId = _ref5.laneId,
        cards = _ref5.cards;

    var lanes = state.lanes.map(function (lane) {
      if (lane.id === laneId) {
        lane.cards = cards;
      }
      return lane;
    });
    return _extends({}, state, lanes);
  }
};

exports.default = LaneHelper;