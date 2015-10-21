import {TITLE_CHANGED} from '../constants/ActionTypes';
import {NOTE_ADD} from '../constants/ActionTypes';

export function changeTitle(text) {
  return {
    type: TITLE_CHANGED,
    text
  }
}

export function addNote(text) {
  console.log('Add note patched');
  return {
    type: NOTE_ADD,
    text
  }
}
