import React, { Component } from 'react';

import './NewRoomForm.css';


class NewRoomForm extends React.Component {

constructor(props) {
    super(props);

    this.state = {
        roomInput : '',
    }
}

handleChange = (event) => {
    this.setState({
        roomInput : event.target.value
    })
}

handleSubmit = (event) => {
event.preventDefault();

//create a room by providing input;
this.props.createRoom(this.state.roomInput);

this.setState({
    roomInput : ''
})


}

render() {
    return(
        <div className="new-room-form">
            <form onSubmit={this.handleSubmit}>
                    <input
                    value={this.state.roomInput}
                    onChange={this.handleChange}
                        type="text" 
                        placeholder="NewRoomForm" 
                        required />
                    <button id="create-room-btn" type="submit">+</button>
            </form>
        </div>
    )
}

}

export default NewRoomForm;