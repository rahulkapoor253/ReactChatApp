import React, { Component } from 'react';

import './Message.css';

class Message extends React.Component {

render() {
    return(
        <div className="message">
            <div>Username : {this.props.username}</div>
            <div>Text : {this.props.text}</div>
        </div>
    )
}

}

export default Message;