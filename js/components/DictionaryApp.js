import React, {PropTypes, Component} from 'react';
import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';

import NavBar from './NavBar.js';
import SmartSearch from './SmartSearch.js';

export default class DictionaryApp extends Component {
  render() {
    return(
      <div className="mobile_block well">
        <NavBar />
        <SmartSearch />

        <div className="list-group">
          <button type="button" className="list-group-item">hell</button>
          <button type="button" className="list-group-item">hello</button>
          <button type="button" className="list-group-item">help</button>
          <button type="button" className="list-group-item">hi</button>
          <button type="button" className="list-group-item">high</button>
        </div>
      </div>
      );
    }
  }
