import React, {Component} from 'react';

import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';

export default class AppNavBar extends Component {

  render() {
    return (
      <header id="header">
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1"><i className="mdi-action-accessibility"></i></span>
          <input id="new-note" className="form-control" placeholder="keyin something ..." autoFocus/>
        </div>
      </header>
    );
  }
}
