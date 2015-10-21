import React, {Component} from 'react';
import {Link} from 'react-router';

import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';

export default class NavBar extends Component {
  render() {
    return(
      <div>
          <Link to={'/note'}><i className="mdi-action-assignment"></i> note</Link>
          <Link to={'/calculator'}><i className="mdi-action-accessibility"></i> calc</Link>
          <Link to={'/chat'}><i className="mdi-communication-forum"></i> chat</Link>
          <Link to={'/dictionary'}><i className="mdi-action-book"></i>dict</Link>
          <Link to={'/wikipedia'}><i className="mdi-action-accessibility"></i>wiki</Link>
          <Link to={'/capture'}><i className="mdi-image-camera-alt"></i> capture</Link>
          <Link to={'/tips'}><i className="mdi-social-school"></i>tips</Link>
      </div>
    );
  }
}
