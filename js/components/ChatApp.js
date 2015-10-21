import React, {PropTypes, Component} from 'react';
import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';

import NavBar from './NavBar.js';
import SmartSearch from './SmartSearch.js';
import MessageList from './MessageList.js';

export default class ChatApp extends Component {
  render() {
    return(
      <div className="mobile_block well">
        <NavBar />
        <SmartSearch />

        <MessageList messages = {[{
            text: 'Use Redux: this is a simple flux practise, you should try it!',
            author: 'idlesong'
          }, {
            text: 'Learn to connect it to React, you could use Webpack, npm, without grunt',
            author: 'william'
          }, {
            text: 'Learn to connect it to React, you could use Webpack, npm, without grunt',
            author: 'william'
          }
        ]} />
      </div>
      );
    }
  }
