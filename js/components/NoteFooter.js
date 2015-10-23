import React, {PropTypes, Component} from 'react';
import NoteItem from './NoteItem.js';
import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';


export default class NoteFooter extends Component {

  handleClick(e){
    e.preventDefault();
    console.log('button name:', e.target.name);
    this.props.onFilterChange(e.target.name);
  }

  render(){

    return(
      <div>
        <span className="label label-info">{this.props.filter}</span>
        <a href="#" className="btn btn-success btn-xs" name="SHOW_ALL" onClick={(e) =>
          this.handleClick(e)}>Show:All</a>
        <a href="#" className="btn btn-success btn-xs" name="SHOW_ACTIVE" onClick={(e) =>
          this.handleClick(e)}>Active</a>
        <a href="#" className="btn btn-success btn-xs" name="SHOW_ARCHIVED" onClick={(e) =>
          this.handleClick(e)}>archived</a>
      </div>
  )}
}

NoteFooter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}
