import React, {PropTypes, Component} from 'react';
import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';

export default class NoteItem extends Component {

  handleValueChange(evt) {
    let text = evt.target.value;

    if(evt.which == 13 && text ) { // key enter
      console.log('note changed:', text);
      this.props.onItemSaveClick(text);
      evt.target.value = '';
    } else if (evt.which === 27 ) {
      evt.target.value = '';
    }
  }

  render(){
    if (this.props.isEditing === true){
      return(
        <div className="panel panel-default">
            <div className="panel-body" >
              <h4 className="list-group-item-heading">
                <a href="#" onClick={this.props.onClick}><i className="mdi-action-delete" ></i></a>
                {this.props.title}</h4>
              <p className="list-group-item-text"
                style={{
                  textDecoration: this.props.archived ? 'line-through' : 'none',
                  cursor: this.props.archived ? 'default' : 'pointer'
                }}
                ><input id="edit-note" className="form-control" defaultValue={this.props.text}
                   onKeyUp={e => this.handleValueChange(e)}/>
                </p>
            </div>
        </div>
      );
    } else {
      return(
        <div className="panel panel-default">
            <div className="panel-body" >
              <h4 className="list-group-item-heading">
                <a onClick={this.props.onClick}><i className="mdi-action-delete" ></i></a>
                {this.props.title}</h4>
              <p className="list-group-item-text"
                style={{
                  textDecoration: this.props.archived ? 'line-through' : 'none',
                  cursor: this.props.archived ? 'default' : 'pointer'
                }}
                onClick={this.props.onItemEditClick}
                >{this.props.text}</p>
            </div>
        </div>
      );
    }
  }

}

NoteItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  onItemEditClick: PropTypes.func.isRequired,
  onItemSaveClick: PropTypes.func.isRequired
};
