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
    //prevent page from reloading again;
event.preventDefault();
this.setState({
    message : event.target.value
})
}

render() {
    return(
        <form className="send-message-form">
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