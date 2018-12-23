import React, { Component } from 'react';

import message from './Message';
import './MessageList.css';
import Message from './Message';


class MessageList extends React.Component {

render() {
    return(
        <div className="message-list">
              <div className="help-text">MessageList</div>
              
              {
                this.props.messages.map(
                    (message, index) => {
                        return(
                            <Message key={index} username={message.senderId} text={message.text}/>
                           
                        )
                    }
                )
            }
        </div>
    )
}

}

export default MessageList;