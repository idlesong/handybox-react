import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import Home from '../components/Home';
import {renderDevTools} from '../utils/devTools';

import NoteApp from '../components/NoteApp.js';

const store = configureStore();

console.log('start test');
// 打印初始状态
console.log(store.getState());

// 监听 state 更新时，打印日志
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

export default React.createClass({
  render() {
    return (
      <div>

        {/* <Home /> is your app entry point */}
        <Provider store={store}>
          <NoteApp notes = {this.props.notes} />
        </Provider>

        {/* only renders when running in DEV mode */
          renderDevTools(store)
        }
      </div>
    );
  }
});
