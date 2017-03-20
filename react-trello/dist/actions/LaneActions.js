'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCards = exports.moveCard = exports.removeCard = exports.addCard = exports.updateLane = undefined;

var _reduxActions = require('redux-actions');

var updateLane = exports.updateLane = (0, _reduxActions.createAction)('UPDATE_LANE');
var addCard = exports.addCard = (0, _reduxActions.createAction)('ADD_CARD');
var removeCard = exports.removeCard = (0, _reduxActions.createAction)('REMOVE_CARD');
var moveCard = exports.moveCard = (0, _reduxActions.createAction)('MOVE_CARD');
var updateCards = exports.updateCards = (0, _reduxActions.createAction)('UPDATE_CARDS');