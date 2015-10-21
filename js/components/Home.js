import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';

import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';

import NavBar from './NavBar.js';
import SmartSearch from './SmartSearch.js';
import MessageList from './MessageList.js';
import NoteList from './NoteList.js';

class Home extends Component {
  render() {
    const {title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    return (
      <main className="mobile_block well">
        <SmartSearch />
        <NavBar />

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

          <NoteList notes = {[{
              text: 'Use Redux: this is a simple flux practise, you should try it!',
              title: 'idlesong'
            }, {
              text: 'Learn to connect it to React, you could use Webpack, npm, without grunt',
              title: 'william'
            }, {
              text: 'Learn to connect it to React, you could use Webpack, npm, without grunt',
              title: 'william'
            }
          ]} />

        <h1 className={styles.text}>Welcome {title}!</h1>
        <button className="btn" onClick={e => actions.changeTitle(prompt())}>
          Update Title
        </button>
      </main>
    );
  }
}

export default connect(state => state.Sample)(Home)
