import React, {PropTypes, Component} from 'react';
import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';

import NavBar from './NavBar.js';
import SmartSearch from './SmartSearch.js';
import TipItem from './TipItem.js';

export default class TipsApp extends Component {
  render() {
    return(
      <div className="mobile_block well">
        <NavBar />
        <SmartSearch />
        <TipItem>
          # react
        </TipItem>
        <TipItem>
          # redux
        </TipItem>
        <TipItem>
          # rails
        </TipItem>
        <TipItem>
          # git
        </TipItem>
      </div>
      );
  }
}
