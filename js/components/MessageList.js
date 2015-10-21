import React, {PropTypes, Component} from 'react';
import MessageItem from './MessageItem.js';
import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';


export default class MessageList extends Component {
  constructor(props) {
    super(props);
    // this.props.messages = ['Hello,world', 'hello, redux', 'hello, chat'];
  }

  render(){

    return(
      <div className="list-group">
        { this.props.messages.map((message) => {
          return(
            <div>
            <MessageItem {...message} />
            </div>
          )}
        )}

      </div>
    );
  }
}

// MessageList.propTypes = {
//   messages: PropTypes.arrayOf(PropTypes.tring).isRequired
// };
