import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import App from './containers/App';

import NoteApp from './components/NoteApp.js';
import CalculatorApp from './components/CalculatorApp.js';
import ChatApp from './components/ChatApp.js';
import DictionaryApp from './components/DictionaryApp.js';
import WikipediaApp from './components/WikipediaApp.js';
import CaptureApp from './components/CaptureApp.js';
import TipsApp from './components/TipsApp.js';

// import {addNote} from './actions/HomeActions.js';
// import configureStore from './store/configureStore';
//
// const store = configureStore();
// console.log('start test');
// // 打印初始状态
// console.log(store.getState());
//
// // 监听 state 更新时，打印日志
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );
//
// // 发起一系列 action
// store.dispatch(addNote('Learn about actions'));


ReactDOM.render(
  <Router>
    <Route path='/' component = {App}> </Route>
    <Route path='/note' component = {App}> </Route>
    <Route path='/calculator' component = {CalculatorApp}> </Route>
    <Route path='/chat' component = {ChatApp}> </Route>
    <Route path='/dictionary' component = {DictionaryApp}> </Route>
    <Route path='/wikipedia' component = {WikipediaApp}> </Route>
    <Route path='/capture' component = {CaptureApp}> </Route>
    <Route path='/tips' component = {TipsApp}> </Route>
  </Router>
, document.getElementById('main'));
