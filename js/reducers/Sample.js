import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  title: 'Home',
  notes: [{title:'note title', text: 'sample note'}]
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.TITLE_CHANGED:
      return {...state, title: action.text};
    case ActionTypes.NOTE_ADD:
      return Object.assign({}, state, {
        notes: [...state.notes, {title: 'test', text: action.text
        }]
      });

    default:
      return state;
  }
}
