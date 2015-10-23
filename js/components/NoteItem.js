import React, {PropTypes, Component} from 'react';
import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';

export default class NoteItem extends Component {

  render(){
    return(
      <div className="panel panel-default">
          <div className="panel-body" onClick={this.props.onClick}>
            <h4 className="list-group-item-heading">{this.props.title}</h4>
            <p className="list-group-item-text"
              style={{
                textDecoration: this.props.archived ? 'line-through' : 'none',
                cursor: this.props.archived ? 'default' : 'pointer'
              }}
              >{this.props.text}</p>
          </div>
      </div>
    );
  }
}

NoteItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};
