import React, {PropTypes, Component} from 'react';
import NoteItem from './NoteItem.js';
import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';


export default class NoteList extends Component {
  constructor(props) {
    super(props);
    // this.props.messages = ['Hello,world', 'hello, redux', 'hello, chat'];
  }

  render(){
    let noteslist = this.props.notes;
    noteslist.reverse();
    return(
      <div className="list-group">
        { noteslist.map((note) => {
          return(
            <div>
              <NoteItem {...note} />
            </div>
          )}
        )}
      </div>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string
  }).isRequired).isRequired
};
