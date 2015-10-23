import {TITLE_CHANGED} from '../constants/ActionTypes';
import {NOTE_ADD, NOTE_EDIT, NOTE_ARCHIVE, SET_VISIBILITY_FILTER} from '../constants/ActionTypes';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_ARCHIVED: 'SHOW_ARCHIVED'
}

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

export function editNote(newText) {
  console.log('Edit note');
  return {
    type: NOTE_EDIT,
    newText
  }
}

export function archiveNote(index){
  console.log('archive note');
  return {
    type: NOTE_ARCHIVE,
    index
  }
}

export function setVisibilityFilter(filter){
  console.log('filter:', filter);
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  }
}
