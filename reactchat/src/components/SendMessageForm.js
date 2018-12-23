import React, { Component } from 'react';

import './SendMessageForm.css';

class SendMessageForm extends React.Component {

constructor(props) {
    super(props);

    this.state = {
        message : '',
    }
}

handleChange = (event) => {
    
this.setState({
    message : event.target.value
})
}

handleSubmit = (event) => {
//prevent page from reloading again;
event.preventDefault();

//submit the message state to chatkit;
this.props.sendMessage(this.state.message);
this.setState({
    message : '',
})
}

render() {
    return(
        <form onSubmit={this.handleSubmit} className="send-message-form">
                <input
                 value={this.state.message}
                onChange={this.handleChange}
                    placeholder="SendMessageForm"
                    type="text" />
            </form>
    )
}

}

export default SendMessageForm;