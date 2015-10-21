import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';

// import * as HomeActions from '../actions/HomeActions';
import NoteSearch from './NoteSearch.js';
import NavBar from './NavBar.js';
import NoteList from './NoteList.js';
import {addNote} from '../actions/HomeActions.js';

export default class NoteApp extends Component {
  render() {
    const { dispatch} = this.props;
    return(
      <div className="mobile_block well">
        <NavBar />
        <NoteSearch onAddNote = {text =>
            dispatch(addNote(text))} />

        <NoteList notes = {this.props.notes} />
      </div>
      );
    }
  }

NoteApp.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string
  })).isRequired
}

export default connect(state => state.Sample)(NoteApp)
