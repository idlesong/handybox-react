import React, {PropTypes, Component} from 'react';

import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';

export default class NoteSearch extends Component {

  handleValueChange(evt) {
    let text = evt.target.value;

    if(evt.which == 13 && text ) { // key enter
      console.log('note entered:', text);
      this.props.onAddNote(text);
      evt.target.value = '';
    } else if (evt.which === 27 ) {
      evt.target.value = '';
    }
  }

  render() {
    return (
      <header id="header">
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1"><i className="mdi-action-accessibility"></i></span>
          <input id="new-note" className="form-control" placeholder="keyin something ..."
            autoFocus onKeyUp={e => this.handleValueChange(e)}/>
        </div>
      </header>
    );
  }
}

NoteSearch.propTypes = {
  onAddNote: PropTypes.func.isRequired
};
