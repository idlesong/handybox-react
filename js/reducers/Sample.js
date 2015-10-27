import * as ActionTypes from '../constants/ActionTypes';
import {combineReducers} from 'redux';

export function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case ActionTypes.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export function notes(state = [], action) {
  switch (action.type) {
    case ActionTypes.NOTE_ADD:
      return [ ...state, {
          title: 'test',
          text: action.text,
          isEditing: false,
          archived: false
      }]
    case ActionTypes.NOTE_SAVE:
      return [...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          text: action.text,
          isEditing:false
        }),
        ...state.slice(action.index+1)]
    case ActionTypes.NOTE_EDIT:
      return [...state.slice(0, action.index),
        Object.assign({}, state[action.index], {isEditing:true}),
        ...state.slice(action.index+1)]
    case ActionTypes.NOTE_ARCHIVE:
      return [...state.slice(0, action.index),
        Object.assign({}, state[action.index], {archived:true}),
        ...state.slice(action.index+1)]
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  visibilityFilter,
  notes
});
