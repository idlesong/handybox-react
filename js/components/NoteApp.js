import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';

// import * as HomeActions from '../actions/HomeActions';
import NoteSearch from './NoteSearch.js';
import NavBar from './NavBar.js';
import NoteList from './NoteList.js';
import NoteFooter from './NoteFooter.js';
import {addNote, editNote, archiveNote, VisibilityFilters, setVisibilityFilter} from '../actions/HomeActions.js';

export default class NoteApp extends Component {
  render() {
    const { dispatch} = this.props;
    const { visibilityFilter} = this.props;

    return(
      <div className="mobile_block well">
        <NavBar />
        <NoteSearch onAddNote = {text =>
            dispatch(addNote(text))} />

        <NoteList
          notes = {this.props.visibleNotes}
          onNoteClick={index =>
            dispatch(archiveNote(index))
          }/>
        <NoteFooter
          filter = {visibilityFilter}
          onFilterChange={(nextFilter) =>{
            dispatch(setVisibilityFilter(nextFilter));
            console.log('onFilterChange');
          }
          }/>
      </div>
      );
    }
  }

NoteApp.propTypes = {
  visibleNotes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string
  })).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_ACTIVE',
    'SHOW_ARCHIVED'
  ]).isRequired
}


function selectNotes(notes, filter){
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return(notes);
    case VisibilityFilters.SHOW_ACTIVE:
      return(notes.filter(note => !note.archived));
    case VisibilityFilters.SHOW_ARCHIVED:
      return(notes.filter(note => note.archived));
  }
}

function select(state){
  return{
    visibilityFilter: state.visibilityFilter,
    visibleNotes: selectNotes(state.notes, state.visibilityFilter)
  };
}

export default connect(select)(NoteApp);
