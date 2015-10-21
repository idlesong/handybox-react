import React, {PropTypes, Component} from 'react';
import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';

import NavBar from './NavBar.js';
import SmartSearch from './SmartSearch.js';

export default class CaptureApp extends Component {
  render() {
    return(
      <div className="mobile_block well">
        <NavBar />
        <SmartSearch />
        <p> Hi, capture! </p>
      </div>
      );
  }
}
